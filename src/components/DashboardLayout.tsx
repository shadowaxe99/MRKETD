import React from 'react';
import styles from '../styles/DashboardLayout.module.css';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.navbar}>
        {/* Navigation bar content */}
      </nav>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
