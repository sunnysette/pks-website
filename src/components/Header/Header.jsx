import React, { useState, useCallback, useMemo } from 'react';

import * as styles from './Header.module.scss';
import { StaticImage  } from 'gatsby-plugin-image';

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
		setMenuOpen(false);
		if (menuOpen) {
			document.body.classList.remove(styles.unscrollable);
		}
	}, [menuOpen]);

	return (
		<header className={styles.header}>
			<div>
				<div className={styles.logo}>
					<StaticImage src="../../images/logo.png" alt="PK Constructions Midlands Logo" width={90} />
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