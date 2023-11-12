import React from 'react';
import { Agent } from './types';

interface AgentCardOverlayProps {
  agent: Agent;
  onClose: () => void;
}

const AgentCardOverlay: React.FC<AgentCardOverlayProps> = ({ agent, onClose }) => {
  return (
    <div className='overlay' onClick={onClose}>
      <div className='overlay-content' onClick={(e) => e.stopPropagation()}>
        <span className='close-overlay' onClick={onClose}>&times;</span>
        <img src={agent.image} alt={agent.name} />
        <h3>{agent.name}</h3>
        <p>{agent.description}</p>
        <p>Level: {agent.level}</p>
        <p>Price: {agent.price} ETH</p>
        <button className='add-to-cart-btn'>Add to Cart</button>
        <button className='go-back-btn' onClick={onClose}>Go Back</button>
      </div>
    </div>
  );
};

export default AgentCardOverlay;
