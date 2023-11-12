import React from 'react';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Elysium OS</title>
        <meta name="description" content="Login to access your Elysium OS account" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
