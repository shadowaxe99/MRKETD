import React, { useState, useEffect } from 'react';
import AgentCard from './AgentCard';
import { Agent } from './types';
// import './newmarket.css';

const AgentList: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    // Fetch the agents data from the dummy data file
    import('../../data/agents.json').then((data) => {
      const agents: Agent[] = data.default.map((item: any) => ({
        ...item,
        isTopPick: false,
      }));
      setAgents(agents);
    });
  }, []);

  return (
    <div className='agent-list'>
      <h2>All Agents</h2>
      <div className='agent-list-container'>
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentList;
