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
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus lectus, condimentum non sodales at, finibus ut orci. Vestibulum non pulvinar dolor. Maecenas nulla est, tristique eu ultricies vel, tempor et justo</p>
			</div>
		</div>
	);
}

export { Hero };