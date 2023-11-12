import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../components/DashboardLayout';
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Elysium OS</title>
        <meta name="description" content="Access your Elysium OS dashboard" />
      </Head>

      <DashboardLayout />
    </div>
  );
};

export default Dashboard;
