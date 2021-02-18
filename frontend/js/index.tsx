import React from 'react';
import ReactDOM from 'react-dom';

import { Menu } from './util';


const Header = () => (
  <header>
    <div className='header-footer__inner'>
      <div className='header__logo'>My closet</div>
      <Menu />
    </div>
  </header>
);


const Footer = () => (
  <footer>
    <div className='header-footer__inner'>
      <Menu />
      <small>&copy; 2021 JIEI</small>
    </div>
  </footer>
);


const App = () => (
  <>
    <Header />
    <Footer />
  </>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);