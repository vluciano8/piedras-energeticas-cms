import React from 'react';
import { siteMetadata } from '../../gatsby-config';
import { Link } from 'gatsby';

const Footer = () => (
	<div className="site-footer">
		<h6 className="text-center font-weight-bold text-secondary">
			<Link to="/">{siteMetadata.title}</Link> - &copy; {new Date().getFullYear()} | Todos los derechos reservados
		</h6>
	</div>
);
export default Footer;

/* 
<div className="site-footer">
		<h4 className="text-center">{siteMetadata.title}</h4>
		<p className="text-center">Siguenos en las redes</p>
		<div className="footer-social-links">
			<ul className="social-links-list">
				<li>
					<a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
						<i class="fab fa-facebook-f" />
					</a>
				</li>
				<li>
					<a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
						<i class="fab fa-twitter" />
					</a>
				</li>
				<li>
					<a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
						<i class="fab fa-instagram" />
					</a>
				</li>
				<li>
					<a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="linkedin">
						<i class="fab fa-linkedin" />
					</a>
				</li>
			</ul>
		</div>
	</div> */
