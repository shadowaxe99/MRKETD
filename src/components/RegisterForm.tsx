import React, { useState } from 'react';
import { AuthenticationService } from '../services/AuthenticationService';
import styles from '../styles/RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const authService = new AuthenticationService();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const user = authService.register(email, password);
      if (user) {
        // Handle successful registration
      } else {
        // Handle registration failure
      }
    } else {
      // Handle password mismatch
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
        <input type="password" id="confirmPassword" className={styles.input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};

export default RegisterForm;
