import React, { useState, useEffect } from "react";
import PubNub from "pubnub";

// Initialize PubNub
const pubnub = new PubNub({
  publishKey: "pub-c-4962f207-ffd7-40b0-9064-4b81fafcc7e1", // replace with your own pub-key
  subscribeKey: "sub-c-57a46a1d-89de-4991-a914-59cc9459c4a9", // replace with your own sub-key
  uuid: "myUniqueUserId" // replace this with a unique id for the user or device
});
  

const EthereumPrice = () => {
  const [price, setPrice] = useState("Loading...");

  useEffect(() => {
    // Function to process incoming messages
    const processMessage = (message) => {
      if (message.message.eon) {
        setPrice(message.message.eon["Ether"]);
      }
    };

    // Subscribe to the channel
    pubnub.subscribe({ channels: ["ether-eon"] });
    pubnub.addListener({ message: processMessage });

    // Fetch the initial price
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.USD);
        pubnub.publish({
          channel: "ether-eon",
          message: {
            eon: {
              "Ether": data.USD.toFixed(2),
            },
          },
        });
      });

    // Unsubscribe when the component is unmounted
    return () => {
      pubnub.unsubscribeAll();
    };
  }, []);

  return <div>Ethereum Price: ${price}</div>;
};

export default EthereumPrice;
