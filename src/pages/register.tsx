import React from 'react';
import Head from 'next/head';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/Register.module.css';

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register | Elysium OS</title>
        <meta name="description" content="Create a new Elysium OS account" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Register</h1>
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
