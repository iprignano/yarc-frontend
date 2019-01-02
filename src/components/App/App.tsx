import React from 'react';
import { Router } from '@reach/router';

import Header from '../Header';
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import NotFound from '../../pages/NotFound';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.contentWrapper}>
        <Router>
          <Home path="/" />
          <SignIn path="sign-in" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
}

export default App;
