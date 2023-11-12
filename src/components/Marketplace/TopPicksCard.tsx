import React, { useState } from 'react';
import { Agent } from './types';
import AgentCardOverlay from './AgentCardOverlay';

interface TopPicksCardProps {
  agent: Agent;
}

const TopPicksCard: React.FC<TopPicksCardProps> = ({ agent }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className='top-picks-card' onClick={handleCardClick}>
        <img src={agent.image} alt={agent.name} />
        <div className='top-picks-card-details'>
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

export default TopPicksCard;
