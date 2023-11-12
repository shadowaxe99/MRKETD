import React, { useState, useEffect, useRef } from "react";
import Personas from './Personas/Personas';
import HierarchicalAgents from './HierarchicalAgents/HierarchicalAgents';
import Pets from './Pets/Pets';
import { Marketplace } from "./Marketplace/Marketplace";
import ChatPage from "./AgentChat/PhoneChat";

// This component will manage the state of the clicked NFT and the overlay
export function Content() {
  const [activeTab, setActiveTab] = useState('agents');

  return (
    <div className="content-container">
      <main className="mx-auto mt-2 max-w-7xl px-2 sm:mt-3 sm:px-3 md:mt-4 lg:mt-6 lg:px-4 xl:mt-8">
        <div className="relative overflow-hidden pt-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative pt-4 sm:pb-12 lg:pb-16">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-yellow sm:text-4xl md:text-5xl lg:text-6xl">
                  Marketplace, The Alchemy of AI
                </h1>
                <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Our vibrant marketplace fuels your kingdom-building by offering a diverse array of AI agents. Each agent is a unique servant, enhancing your capabilities, defending your realm, or taking on adversaries in the vast metaverse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <div className="w-full">
        <div className="tabs-container">
          <button onClick={() => setActiveTab('agents')} className={`tab-button ${activeTab === 'agents' ? 'active' : ''}`}>Agents</button>
          <button onClick={() => setActiveTab('personas')} className={`tab-button ${activeTab === 'personas' ? 'active' : ''}`}>Personas</button>
          <button onClick={() => setActiveTab('hierarchical')} className={`tab-button ${activeTab === 'hierarchical' ? 'active' : ''}`}>Hierarchical Agents</button>
          <button onClick={() => setActiveTab('pets')} className={`tab-button ${activeTab === 'familiarize' ? 'active' : ''}`}>Pets</button>
        </div>
        <div className="tab-content w-full">
          {activeTab === 'agents' && <Marketplace />}
          {activeTab === 'personas' && <Personas />}
          {activeTab === 'hierarchical' && <HierarchicalAgents />}
          {activeTab === 'pets' && <Pets />}
        </div>
      </div>
    </div>
  );
}
