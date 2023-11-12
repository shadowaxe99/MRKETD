import React from 'react';

interface AgentCardProps {
  image: string;
  id: number;
  name: string;
  status: string;
  tier: string;
  task: string;
  progress: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ id, name, status, tier, task, progress, image }) => {
  const tierClass = tier === 'legendary' ? 'legendary' : tier === 'rare' ? 'rare' : 'common';

  return (
    <div className={`agent-card-account ${status} ${tierClass}`}> 
      <img src={image} alt={name} className="agent-image-account mb-4" />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Tier: {tier}</p>
      <p>Task: {task}</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default AgentCard;

