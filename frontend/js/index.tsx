import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';
import Body from './main';

import '../css/app.scss';


const App: React.FC = (): React.ReactElement => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);