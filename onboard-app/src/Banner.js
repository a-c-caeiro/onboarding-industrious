import React from 'react';
import './Banner.scss';

class Banner extends React.Component {
  render() {
    return (
	  /* section Intro */
	  <section className="banner">
	    <div className="row">
	      <h1>INDUSTRIOUS</h1>
	      <p>
	      A responsive business oriented template with a video background<br/>
	        designed by TEMPLATED and released under the Creative Commons License.
	     </p>
	      
	    </div>
	  </section>
    );
  }
}
/* TODO: fix video background 
<video autoplay loop muted playsinline src="https://templated.co/items/demos/industrious/images/banner.mp4"></video>
*/
export default Banner;
