import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
	  <footer className="foot">
		  <div className="upper">
		    <div className="about">
		    	<h3>Accumsan montes viverra</h3>
				<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
		    </div>
		    <div className="list">
		    	<h4>Sem turpis amet semper</h4>
		    	<li><a href="#">Dolor pulvinar sed etiam.</a></li>
				<li><a href="#">Etiam vel lorem sed amet.</a></li>
				<li><a href="#">Felis enim feugiat viverra.</a></li>
				<li><a href="#">Dolor pulvinar magna etiam.</a></li>
		    </div>
		    <div className="social">
		    	<h4>Magna sed ipsum</h4>
				<ul class="plain">
					<li><a href="#"><i className="fa fa-twitter">&nbsp;</i>Twitter</a></li>
					<li><a href="#"><i className="fa fa-facebook">&nbsp;</i>Facebook</a></li>
					<li><a href="#"><i class="fa fa-instagram">&nbsp;</i>Instagram</a></li>
					<li><a href="#"><i className="fa fa-github">&nbsp;</i>Github</a></li>
				</ul>
		    </div>
		  </div>
		  <div className="lower">
		  	© Untitled. Photos <a href="https://unsplash.co">Unsplash</a>, Video <a href="https://coverr.co">Coverr</a>.
		  </div>
  	  </footer>
    );
  }
}

export default Footer;