import React, { useState } from 'react';
import { AuthenticationService } from '../services/AuthenticationService';
import styles from '../styles/LoginForm.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authService = new AuthenticationService();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = authService.login(email, password);
    if (user) {
      // Handle successful login
    } else {
      // Handle login failure
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
