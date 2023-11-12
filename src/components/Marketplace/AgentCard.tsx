import React, { useState } from 'react';
import { Agent } from './types';
import AgentCardOverlay from './AgentCardOverlay';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className='agent-card' onClick={handleCardClick}>
        <img src={agent.image} alt={agent.name} />
        <div className='agent-card-details'>
          <h3>{agent.name}</h3>
          <p>{agent.description}</p>
          <p>Level: {agent.level}</p>
          <p>Price: {agent.price} ETH</p>
        </div>
      </div>
      {showOverlay && <AgentCardOverlay agent={agent} onClose={handleCloseOverlay} />}
    </>
  );
};

export default AgentCard;
