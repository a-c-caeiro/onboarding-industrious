import React from 'react';
import './TableIcons.scss';
import 'font-awesome/css/font-awesome.min.css';
import data from '../data/data.json'

class Element extends React.Component {
  render() {
    return (
      /* section Intro */
      <div className="tableElement">
        {/* TODO: insert image link */}
        <a href="#" className={this.props.icon}></a>       
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const  tableiconData= data.map( ( data) =>{
                  return  (
                    <Element title={data.name} icon={data.iconClass} text={data.text}/>
                  ) } )

class TableIcons extends React.Component {
  render() {
    return (
      /* section Intro */
      <section className="tableicons">
        <div className="row">
          <h2> SEM TURPIS AMET SEMPER </h2>
          <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare<br/> aliquet accumsan erat tempus amet porttitor.</p>
          <div className="content">
            {tableiconData}           
          </div>
        </div> 
      </section>
    );
  }
}

export default TableIcons;
