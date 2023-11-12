import React from 'react';

const AgentRow: React.FC = () => {
  return (
    <div className='agent-row ml-12'>
      <div className='agent-square'>
        <img src='consigliere.png' alt='Consigliere' />
      </div>
      {[1, 2, 3].map((id) => (
        <div key={id} className={`agent-circle agent${id}`}> 
          <img src={`agent${id}.png`} alt={`Agent ${id}`} />
        </div>
      ))}
      {[4, 5, 6].map((id) => (
        <div key={id} className='agent-circle locked'>
          {/* Locked agent indication */}
        </div>
      ))}
    </div>
  );
};

export default AgentRow;
