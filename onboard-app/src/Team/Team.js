import React from 'react';
import './Team.scss';

class Person extends React.Component {
  render() {
    return (
      /* section Intro */
      <div className="tableElement">
        <blockquote>
        	<p><
        </blockquote>
        <a href="#" className={this.props.icon}></a>       
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class Team extends React.Component {
  render() {
    return (
	  <section className="team">
	    <div class="row">    
	      <h2>FAUCIBUS CONSEQUAT LOREM</h2>
	      <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
	    </div>
	  </section>
    );
  }
}

export default Team;
