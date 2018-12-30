import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Logo className={styles.logo} />

        <div className={styles.userLinks}>
          sign in
        </div>
      </div>
    </div>
  );
}

export default Header;
