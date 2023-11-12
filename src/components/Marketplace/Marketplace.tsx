import React from 'react';
import TopPicks from './TopPicks';
import AgentList from './AgentList';

export const Marketplace = () => {
  return (
    <div className='marketplace'>
      <h1>Elysium Marketplace</h1>
      <TopPicks />
      <AgentList />
    </div>
  );
};
