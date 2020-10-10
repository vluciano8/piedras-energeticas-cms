import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar fixed="top" expand="sm" light>
				<div className="container">
					<NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/tags/">Tags</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/equipo/">Equipo</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/acerca/">Acercas</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
