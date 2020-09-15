import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NavBar from './NavBar';
import Banner from './Banner';

class Website extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
      </>
      /*<TableIcons/>
      <DiffBack />
      <Team />
      <Footer />*/
    );
  }
}

// ========================================

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
