import React from 'react';

import * as styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p itemscope="" itemtype="http://schema.org/Organization">
				&copy; {new Date().getFullYear()}&nbsp;
				<span itemprop="name">PK Constructions Midlands LTD</span> |&nbsp;
				<span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
					<span itemprop="streetAddress">37 Friary Avenue</span>,&nbsp;
					<span itemprop="addressLocality">Allenton</span>,&nbsp;
					<span itemprop="addressRegion">Derby</span>,&nbsp;
					<span itemprop="postalCode">DE24 9DD</span>
				</span> |&nbsp;
				<a href="https://www.instagram.com/sukhj0t/" target="_blank" rel="noreferrer nofollow">Credits</a>
			</p>
		</footer>
	);
}

export { Footer };