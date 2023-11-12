import React from 'react';

const UserStatusPanel = () => {
  // Dummy data for user status
  const userStatus = {
    level: 'Normal',
    experience: 50, // This is a percentage of the experience bar
    agentsCount: {
      total: 6,
      legendary: 1,
      rare: 2,
      common: 3,
    },
    worldLevel: 5,
  };

  return (
    <div className="user-status-panel">
      <h1>User Status</h1>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${userStatus.experience}%` }}></div>
      </div>
      <div className="user-agents-info">
        <p>Total Agents: {userStatus.agentsCount.total}</p>
        <p>Legendary: {userStatus.agentsCount.legendary}</p>
        <p>Rare: {userStatus.agentsCount.rare}</p>
        <p>Common: {userStatus.agentsCount.common}</p>
      </div>
      <div className="user-level-info">
        <p>World Level: {userStatus.worldLevel}</p>
      </div>
    </div>
  );
};

export default UserStatusPanel;
