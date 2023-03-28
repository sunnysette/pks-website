import React from 'react';

import * as styles from './Hero.module.scss';

function Hero() {
	return (
		<div className={styles.hero}>
			<video
				className={styles.video}
				loop
				muted
				autoPlay
				src="https://www.shutterstock.com/shutterstock/videos/1057704832/preview/stock-footage-aerial-flight-over-a-new-constructions-development-site-with-high-tower-cranes-building-real-estate.webm"
			/>
			<div className={styles.text}>
				<h1>Concrete Finishing Specialists</h1>
				<p>PK Construction is a leading Midlands industrial concrete flooring contractors, with many years experience of concrete finishing for diverse projects of varying sizes and specifications of concrete floors.</p>
			</div>
		</div>
	);
}

export { Hero };