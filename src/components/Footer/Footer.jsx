import React from 'react';

import * as styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} PK Constructions Midlands LTD | 37 Friary Avenue, Allenton, Derby, DE24 9DD</p>
		</footer>
	);
}

export { Footer };