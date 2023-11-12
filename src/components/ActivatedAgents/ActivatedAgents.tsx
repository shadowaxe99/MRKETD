import React, { useState, useEffect, useRef } from "react";
import AgentCarousel from "./AgentCarousel";
import { createRoot } from 'react-dom/client';
import ChatPage from "../AgentChat/PhoneChat";
import EthereumPrice from "../Ethereum";
import AgentModal from './AgentCard';
import categoriesDictionary from "@/data/categories";
import agentData from "@/data/agents";

const ActivatedAgents = () => {

  const [selectedNft, setSelectedNft] = useState(null);

  const openModal = (nft: any) => {
    setSelectedNft(nft);
  };

  const closeModal = () => {
    setSelectedNft(null);
  };


  function getCategoryInfo(agent: { category?: keyof typeof categoriesDictionary }) {
    if (agent.category && categoriesDictionary[agent.category]) {
      return categoriesDictionary[agent.category];
    }
    return { name: 'Unknown', logo: 'default-logo.png', description: 'No category information available.' };
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full rounded-3xl bg-gray-800 p-6 lg:w-8/12">
        <div className="mb-2 flex items-center justify-between text-white" style={{ fontFamily: "Futura, Arial, sans-serif" }}>
          <p className="text-2xl font-bold" style={{ fontFamily: "Futura, Arial, sans-serif" }}>YOUR COLLECTION ✅</p>
          <EthereumPrice />
        </div>
        <div className="grid-container">
          {agentData.filter(nft => nft.activated).map((nft) => {
            const categoryInfo = getCategoryInfo({ category: nft.category as "Companion" | "Guardian" | "Service" | "Seality" | "Wellness" });
            return (
              <div className="profile-long-container" key={nft.id} onClick={() => openModal(nft)}>
                <img
                  className="category-logo"
                  src={categoryInfo ? categoryInfo.logo : 'default-logo.png'}
                  alt={`${nft.category} Logo`}
                />
                <div className="img-container">
                  <img
                    className="nft-image"
                    src={nft.imageSrc}
                    alt={`Otherdeed ${nft.id}`}
                  />
                  <div className="tag">
                    <div className="tag-text">{nft.ownedDuration}</div>
                  </div>
                </div>
                <div className="nft-description-container">
                  <div className="nft-name">{nft.name} #{nft.id}</div>
                  <div className="category-name" style={{ fontFamily: "Futura, Arial, sans-serif" }}>
                    {categoryInfo ? categoryInfo.name : 'Default description'}
                  </div>
                  <div className="row-container">
                    <div className="bought-text">Bought</div>
                    <div className="second-details">
                      <img
                        className="eth-image"
                        src="/eth_icon.svg"
                        alt="Ethereum"
                      />
                      <div className="amount-text">{nft.boughtAmount}</div>
                    </div>
                  </div>
                  <div className="row-second-container">
                    <div className="bought-text">Floor</div>
                    <div className="second-details">
                      <img
                        className="eth-second-image"
                        src="/eth_icon.svg"
                        alt="Ethereum"
                      />
                      <div className="amount-second-text">{nft.floorAmount}</div>
                      <div className="amount-green-text">{nft.floorChangePercentage}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xl mt-4 mb-4 text-white font-bold">Available Agents</p>
        <AgentCarousel agentData={agentData} categoriesDictionary={categoriesDictionary} />
      </div>
      <div className="w-full lg:mt-0 lg:w-4/12 rg:pl-8" style={{ fontFamily: "Futura, Arial, sans-serif" }}>
        <ChatPage />
      </div>
      {selectedNft && (
        <AgentModal
          nft={selectedNft}
          categoryInfo={getCategoryInfo(selectedNft) || undefined}
          onClose={closeModal}
        />
      )}
    </div>
  );
}


export default ActivatedAgents;