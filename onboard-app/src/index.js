import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NavBar from './NavBar/NavBar';
import Banner from './Banner/Banner';
import TableIcons from './TableIcons/TableIcons';
import DiffBack from './DiffBack/DiffBack';
import Team from './Team/Team';
import Footer from './Footer/Footer';


class Website extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <TableIcons />
        <DiffBack />
        <Team />
        <Footer />
      </>
    );
  }
}

// ========================================

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
