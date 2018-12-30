import React from 'react';

import Link from '../Link';
import Logo from '../Logo';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to="/" title="Go back to yarc.app">
          <Logo className={styles.logo} />
        </Link>

        <div className={styles.userLinks}>
          <Link to="/sign-in">sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
