import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../CSS/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <NavLink to="/" className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}>
        Temples
      </NavLink>
      <NavLink to="/hillstation" className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}>
        Hillstation
      </NavLink>
      <NavLink to="/beaches" className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}>
        Beaches
      </NavLink>
      <NavLink to="/gallery" className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}>
        Gallery
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}>
        About
      </NavLink>
    </nav>
  );
};

export default Nav;