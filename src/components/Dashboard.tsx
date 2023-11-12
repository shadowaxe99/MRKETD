import React from 'react';
import UserInterface from '../classes/UserInterface';

const Dashboard: React.FC = () => {
  const ui = new UserInterface();

  return (
    <div>
      {ui.displayDashboard()}
      {ui.visualizeImpact()}
    </div>
  );
};

export default Dashboard;
