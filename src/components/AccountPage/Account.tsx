import React from 'react';
import AgentCard from './AgentCard';
import { dummyAgents, dummyUser } from './dummyData';
import UserStatusPanel from './UserStatusPanel';
// import { Pacman } from './Pacman';

const Account = () => {
  return (
    <div className="account-container">
      <div className="user-card">
        <UserStatusPanel />
      </div>
      <div className="consigliere-card">
        <img src="/consigliere.png" alt="Consigliere" className="consigliere-image" />
        <div className="consigliere-details">
          <h2>Consigliere</h2>
          {/* Consigliere details here */}
        </div>
        <div className="consigliere-effects">
          {/* Special effects and animations here */}
        </div>
      </div>
      <div className="agents-overview">
        {dummyAgents.map(agent => (
          <AgentCard 
            key={agent.id} 
            id={agent.id} 
            name={agent.name} 
            status={agent.status} 
            tier={agent.tier} 
            task={agent.task} 
            progress={agent.progress} 
            image={agent.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Account;
