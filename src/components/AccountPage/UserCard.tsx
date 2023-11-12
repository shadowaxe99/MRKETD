import React from 'react';

interface UserCardProps {
  username: string;
  status: string;
  agentsCount: {
    total: number;
    legendary: number;
    rare: number;
    common: number;
  };
  worldLevel: number;
}

const UserCard: React.FC<UserCardProps> = ({ username, status, agentsCount, worldLevel }) => {
  return (
    <div className='user-card'>
      <h1>{username}</h1>
      <p>Status: {status}</p>
      <p>Agents: Total {agentsCount.total} (Legendary: {agentsCount.legendary}, Rare: {agentsCount.rare}, Common: {agentsCount.common})</p>
      <p>World Level: {worldLevel}</p>
      {/* More gamified dummy data and visual elements will be added here */}
    </div>
  );
};

export default UserCard;
