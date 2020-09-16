import React from 'react';
import './TableIcons.scss';
import 'font-awesome/css/font-awesome.min.css';



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


class TableIcons extends React.Component {
  render() {
    return (
      /* section Intro */
      <section className="tableicons">
        <div className="row">
          <h2> SEM TURPIS AMET SEMPER </h2>
          <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare<br/> aliquet accumsan erat tempus amet porttitor.</p>
          <div className="content">
            <Element title="FEUGIAT CONSEQUAT" icon="fa fa-address-card" 
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />
            <Element title="ANTE SEM INTEGER" icon="fa fa-copy"
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />      
            <Element title="IPSUM CONSEQUAT" icon="fa fa-save"
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />
            <Element title="INTERDUM GRAVIDA" icon="fa fa-line-chart"
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />
            <Element title="FAUCIBUS CONSEQUAT" icon="fa fa-send"
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />
            <Element title="ACCUMSAN VIVERRA" icon="fa fa-qrcode"
                     text="Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."
                     />            
          </div>
        </div> 
      </section>
    );
  }
}

export default TableIcons;
