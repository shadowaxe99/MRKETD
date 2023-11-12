import React, { useState, useEffect } from 'react';
import TopPicksCard from './TopPicksCard';
import { Agent } from './types';
// import './newmarket.css';

const TopPicks: React.FC = () => {
  const [topPicks, setTopPicks] = useState<Agent[]>([]);

  useEffect(() => {
    // Fetch the top picks data from the dummy data file
    import('../../data/topPicks.json').then((data) => {
      const agents: Agent[] = data.default.map((item: any) => ({
        ...item,
        price: 0,
        isTopPick: false,
        level: 0,
      }));
      setTopPicks(agents);
    });
  }, []);

  return (
    <div className='top-picks'>
      <h2>Top Picks</h2>
      <div className='top-picks-container'>
        {topPicks.map((agent) => (
          <TopPicksCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
