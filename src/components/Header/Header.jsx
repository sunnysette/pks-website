import React, { useState, useCallback, useMemo } from 'react';

import logo from '../../images/logo-3.svg';
import * as styles from './Header.module.scss';

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const onToggleMenu = useCallback((e) => {
		e.preventDefault();
		setMenuOpen((s) => !s);
		document.body.classList.toggle(styles.unscrollable);
	}, []);

	const menuClasses = useMemo(() => {
		const classes = [styles.menu];
		if (menuOpen) classes.push(styles.open);
		return classes;
	}, [menuOpen]);

	const onLinkClick = useCallback(() => {
		setMenuOpen((s) => !s);
		document.body.classList.toggle(styles.unscrollable);
	}, []);

	return (
		<header className={styles.header}>
			<div>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" width="250" />
				</div>
				<div className={menuClasses.join(' ')}>
					<button className={styles.hamburger} onClick={onToggleMenu}>
						<span />
						<span />
						<span />
					</button>
					<ul>
						<li><a href="#our-services" onClick={onLinkClick}>Our services</a></li>
						<li><a href="#about-us" onClick={onLinkClick}>About us</a></li>
						<li><a href="#contact-us" onClick={onLinkClick}>Contact us</a></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export { Header };