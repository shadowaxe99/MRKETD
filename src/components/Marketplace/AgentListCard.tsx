import React from 'react';
import { Agent } from './types';

interface AgentListCardProps {
  agent: Agent;
}

const AgentListCard: React.FC<AgentListCardProps> = ({ agent }) => {
  return (
    <div className='agent-list-card'>
      <img src={agent.image} alt={agent.name} className='agent-list-image' />
      <div className='agent-list-details'>
        <h3>{agent.name}</h3>
        <p>{agent.description}</p>
      </div>
    </div>
  );
};

export default AgentListCard;
