import React from 'react';

import logo from '../../images/logo-3.svg';
import * as styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" width="250" />
				</div>
				<div className={styles.menu}>
					<ul>
						<li><a href="#our-services">Our services</a></li>
						<li><a href="#about-us">About us</a></li>
						<li><a href="#contacts-us">Contact us</a></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export { Header };