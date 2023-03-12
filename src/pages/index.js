import * as React from "react";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

import * as styles from '../css/index.module.scss';
import * as sharedStyles from '../css/shared.module.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className={styles.intro}>
          <div>
            <div>
              <img src="https://www.shutterstock.com/image-photo/malacca-malaysia-september-28-2016-260nw-494298121.jpg" alt="Working workers" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor dolor, accumsan imperdiet sollicitudin non, viverra quis lacus. Aenean tempor orci sit amet lorem semper imperdiet. Pellentesque nisi libero, ultrices id tincidunt quis, facilisis consequat elit. Donec tempor lacinia erat sed egestas. Fusce sed rhoncus sem. Sed at sem elit.</p>
              <p>Donec commodo convallis justo, non aliquet metus interdum nec. Vivamus nec quam odio. Integer vulputate in nibh vel fringilla. Fusce volutpat volutpat erat quis suscipit. Suspendisse et ullamcorper velit, sit amet iaculis est. Nunc luctus sapien elit, sit amet fermentum ex condimentum id. Sed id lorem id lectus posuere ultrices vitae sit amet purus.</p>
              <a className={sharedStyles.button} href="#">Contact us</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>PK Constuctions Midlands Limited</title>
    <meta name="robots" content="noindex,nofollow" />
  </>
);
