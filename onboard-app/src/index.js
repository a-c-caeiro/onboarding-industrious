import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import NavBar from './NavBar';
import Banner from './Banner';
import TableIcons from './TableIcons';

class Website extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <TableIcons />
      </>
      /*<DiffBack />
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
