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
						<li>Our services</li>
						<li>About us</li>
						<li>Contact us</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export { Header };