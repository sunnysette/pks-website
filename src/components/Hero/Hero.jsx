import React from 'react';

import * as styles from './Hero.module.scss';

function Hero() {
	return (
		<div className={styles.hero}>
			<video
				src="/construction-work.mov"
				poster="/constructions-midlands.jpg"
				autoPlay
				loop
				muted
			/>
			<div className={styles.backdrop} />
			<div className={styles.text}>
				<h1>Concrete Finishing Specialists</h1>
				<p>PK Constructions is a leading Midlands industrial concrete flooring contractors, with many years experience of concrete finishing for diverse projects of varying sizes and specifications of concrete floors.</p>
			</div>
		</div>
	);
}

export { Hero };