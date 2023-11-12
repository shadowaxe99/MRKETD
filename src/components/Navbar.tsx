import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logoLink}>Elysium OS</a>
        </Link>
      </div>
      <div className={styles.navItems}>
        <Link href="/dashboard">
          <a className={styles.navItem}>Dashboard</a>
        </Link>
        <Link href="/account">
          <a className={styles.navItem}>Account</a>
        </Link>
        <Link href="/logout">
          <a className={styles.navItem}>Logout</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
