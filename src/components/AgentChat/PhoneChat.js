import React, { useState } from "react";
import { profiles, frequentlyUsed } from "./profiles";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faInfoCircle,
    faDownload
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BubblesSpinner from "../BubbleSpinner/BubbleSpinner";

// Tooltip for user info
const UserInfoTooltip = ({ info }) => {
    return (
        <div className="absolute z-50 left-0 top-24 ml-48 mt-2 w-80 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <div className=" items-center mb-2 w-full">
                <ul className="w-full">
                    <li>{info.name}</li>
                    <li> {info.description} </li>
                </ul>
            </div>
        </div>
    );
};

// Tooltip for download option
const DownloadTooltip = () => {
    return (
        <div className="absolute z-50 right-6 top-24 ml-48 mt-2 w-80 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <div className=" items-center mb-2 w-full">
                <ul className="w-full">
                    <p>Download conversation history </p>
                </ul>
            </div>
        </div>
    );
};

// Main Chat Page Component
const ChatPage = () => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState(
        profiles.reduce((acc, profile) => ({ ...acc, [profile.id]: [] }), {})
    );
    const [currentMessage, setCurrentMessage] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [showToolTipInfo, setShowToolTipInfo] = useState(null);
    const [showDownloadToolTip, setShowDownloadTooltip] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    // Handle contact selection
    const handleContactClick = (member) => {
        console.log("CHOOSING MEMBER", member);
        setSelectedContact(member);
        const noMessagesYet =
            !messages[member.id] || messages[member.id].length === 0;

        if (member.canChat && noMessagesYet) {
            // Add a greeting message from the profile
            setIsLoading(true);
            const greetingMessage = {
                id: Date.now(),
                type: "profile", // profile message
                content: `Hey there! I'm ${member.name}, how can I assist you today?`, // Your greeting message here
                imagePath: member.image
            };
            setTimeout(() => {
                setMessages((prevMessages) => ({
                    ...prevMessages,
                    [member.id]: [greetingMessage]
                }));
                setIsLoading(false);
            }, 2000);
        }
    };
    // Handle back to contacts
    const handleBackToContacts = () => {
        setSelectedContact(null);
        setAudioUrl(null);
        setCurrentMessage("");
    };

    // Download chat history
    const downloadChatHistory = () => {
        if (!selectedContact || !messages[selectedContact.id]) {
            alert("No chat history available for the selected contact.");
            return;
        }

        const chatHistory = messages[selectedContact.id];

        let text = `Chat History with ${selectedContact.name}\n\n`;

        chatHistory.forEach((chatEntry) => {
            if (chatEntry.type === "user") {
                text += `You: ${chatEntry.content}\n`;
            } else if (chatEntry.type === "profile") {
                text += `${selectedContact.name}: ${chatEntry.content}\n`;
            }
        });

        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${selectedContact.name}_chat_history.txt`;
        a.click();

        URL.revokeObjectURL(url);
    };

    // Text to speech conversion
    const textToSpeech = async (voiceId, inputText) => {
        const API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
        try {
            const speechDetails = await axios.request({
                method: "POST",
                url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
                headers: {
                    accept: "audio/mpeg", // Set the expected response type to audio/mpeg.
                    "content-type": "application/json", // Set the content type to application/json.
                    "xi-api-key": `${API_KEY}` // Set the API key in the headers.
                },
                data: {
                    text: inputText // Pass in the inputText as the text to be converted to speech.
                },
                responseType: "arraybuffer" // Set the responseType to arraybuffer to receive binary data as response.
            });

            return speechDetails.data;
        } catch (error) {
            console.log("elevenlabs error", error);
        }
    };

    // Handle sending message
    const handleSendMessage = async () => {
        setCurrentMessage("");
        setAudioUrl(null);
        setIsLoading(true);

        const imessage_audio = new Audio("/sounds/imessage-sound.mp3");
        setTimeout(() => {
            imessage_audio.play();
        }, 50);

        const userMessageEntry = {
            id: Date.now(), // unique identifier, can be generated differently
            type: "user", // user message
            content: currentMessage,
            imagePath: "/path/to/user/image.jpg"
        };
        setMessages((prevMessages) => ({
            ...prevMessages,
            [selectedContact.id]: [
                ...(prevMessages[selectedContact.id] || []),
                userMessageEntry
            ]
        }));

        const prod_base_url =
            "https://elysium-realchar-production.up.railway.app";
        const local_url = "http://127.0.0.1:5000";

        try {
            const request_url = `${prod_base_url}/ask`;
            console.log(selectedContact);
            const response = await fetch(request_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    profile: selectedContact.id,
                    message: currentMessage
                })
            });
            console.log("response", response);
            if (!response.ok) {
                throw new Error("API error");
            }

            const data = await response.json();

            const profileResponseEntry = {
                id: Date.now() + 1, // unique identifier, can be generated differently
                type: "profile", // profile response
                content: data.text_response, // Replace with actual response,
                imagePath: selectedContact.image
            };

            setMessages((prevMessages) => ({
                ...prevMessages,
                [selectedContact.id]: [
                    ...(prevMessages[selectedContact.id] || []),

                    profileResponseEntry
                ]
            }));

            console.log("data", data);
            console.log("messsages", messages);
            // Display text response in the chat interface
            // setTextResponse(data.text_response || "");
            if (data.voice_id) {
                const voiceId = data.voice_id;
                console.log("voiceid", voiceId);
                const audio = await textToSpeech(voiceId, data.text_response);
                const blob = new Blob([audio], { type: "audio/mpeg" });
                const url = URL.createObjectURL(blob);
                console.log("url", url);
                setAudioUrl(url);
            }
        } catch (error) {
            console.error("error", error);
            alert("Error sending message or processing the received response.");
        }
        setIsLoading(false);

        // *****
    };

    // Render the chat page
    return (
        <div className="relative flex flex-col h-screen text-black phone-container">
            {/* Contact List */}
            { !selectedContact && (
            <div className="relative w-full h-5/6 mx-auto rounded-3xl overflow-hidden shadow-xl contact-list">
                <div className="favourites-container sticky top-0 z-10 p-4">
                    <p className="font-semibold text-center text-white">
                        Chat With Your Agents 🤖
                    </p>
                    <div className="flex w-full mt-1 overflow-x-auto border-t-2 border-b-2 border-gray-400 pt-8">
                        <p className="absolute top-16 left-2 font-semibold text-white mb-4">
                            Favorites ⭐️
                        </p>
                        {frequentlyUsed.map((profile, i) => (
                            <div
                                key={i}
                                className="mt-2 profile-item flex-none flex flex-col items-center w-24 mx-2 h-full cursor-pointer rounded p-1 profile-item" // Apply styles for profile-item
                                onClick={() => handleContactClick(profile)}
                            >
                                <div className="avatar relative w-12 h-12 border-2 border-gray-100 rounded-full overflow-hidden">
                                    <img
                                        id={profile.id}
                                        src={profile.image}
                                        alt={profile.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-sm text-white">{profile.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <ul className="overflow-y-scroll h-full">
                    {profiles.map((member) => (
                        <li
                            key={member.id}
                            className="contact-item p-4 cursor-pointer" // Apply styles for contact-item
                            onClick={() => handleContactClick(member)}
                        >
                            <div className="flex items-center">
                                <div className="avatar relative w-12 h-12 border-2 border-gray-500 rounded-full overflow-hidden">
                                    <img
                                        id={member.id}
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="ml-4 text-white">
                                    <p className="font-semibold">{member.name}</p>
                                    <small className="text-gray-300">{member.role}</small>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> )}
            {/* ... continuing the chat interface ... */}
            <div className={`chat-screen transition-all duration-500 ${selectedContact ? "left-0" : "left-full"}`}>
                {selectedContact && (
                    <>
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <button
                                onClick={handleBackToContacts}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                {/* Replace with appropriate back icon */}
                                <span>Back</span>
                            </button>
                            <div className="flex items-center">
                                <div className="relative w-12 h-12 border-2 border-gray-500 rounded-full overflow-hidden mr-4">
                                    <img
                                        id={selectedContact.id}
                                        src={selectedContact.image}
                                        alt={selectedContact.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-white">{selectedContact.name}</p>
                                    <small className="text-sm text-gray-300">{selectedContact.title}</small>
                                </div>
                            </div>
                            <button
                                onClick={downloadChatHistory}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                {/* Replace with appropriate download icon */}
                                <span>Download</span>
                            </button>
                        </div>

                        <div className="p-4 max-h-96 h-96 overflow-y-auto">
                            {/* Messages will be mapped here */}
                            {messages[selectedContact.id]?.map((chatEntry, index) => (
                                <div
                                    key={index}
                                    className={`message-bubble-${chatEntry.type} p-3 rounded-lg m-2 max-w-lg ${chatEntry.type === 'user' ? 'self-end bg-blue-500' : 'self-start bg-gray-300'}`}
                                >
                                    {chatEntry.content}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                            {selectedContact.canChat && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={currentMessage}
                                        onChange={(e) => setCurrentMessage(e.target.value)}
                                        className="w-full p-2 rounded bg-gray-200 text-black"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="send-button ml-2 bg-blue-500 text-white rounded p-2"
                                    >
                                        Send
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );

};

export default ChatPage;
