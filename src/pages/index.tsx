import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elysium OS</title>
        <meta name="description" content="Enter the realm of Elysium OS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Elysium OS
        </h1>
        <p className={styles.description}>
          Your gateway to the digital and physical realms
        </p>
        {/* Additional content will go here */}
      </main>

      <footer className={styles.footer}>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
};

export default Home;
