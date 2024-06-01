import * as React from "react";

import { StaticImage } from 'gatsby-plugin-image';

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
        <div id="our-services" className={styles.services}>
          <div className={[styles.intro, sharedStyles.container].join(' ')}>
            <div>
              <StaticImage src="../images/power-floating.jpg" alt="Working on concrete finishing" placeholder="blurred" />
            </div>
            <div>
              <p>At PK Constructions, we offer a comprehensive range of concrete finishing services, including Tamp/Float Finish, Power floating/Pan Finish, Brushed Finish, Sloped/Ramped.</p>
              <p>With a focus on providing the highest level of professionalism, reliability, and customer satisfaction, we strive to exceed our customers' expectations on every project we undertake.</p>
              <p>Whether you need a new concrete floor for your commercial property or are looking to renovate your existing space, we have the expertise and resources to meet your needs. We use only the highest quality materials to ensure that your concrete finish is durable, long-lasting, and beautiful.</p>
              <a role="button" className={sharedStyles.button} href="#contact-us">Contact us</a>
            </div>
          </div>
          <div className={[styles.list, sharedStyles.container].join(' ')}>
            <div>
              <StaticImage src="../images/power-floating.jpg" alt="Working on concrete finishing" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/midlands-finishing-expert.jpg" alt="Finishing Expert in Midlands" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/concrete-finishing.jpg" alt="Concrete work done by PK Constructions" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/brushed-finishing.jpg" alt="Finshing job done by PK Constructions" placeholder="blurred" />
            </div>
          </div>
        </div>
        <div id="about-us" className={styles.aboutUs}>
          <div className={[styles.container, sharedStyles.container].join(' ')}>
            <div className={styles.image}>
              <StaticImage src="../images/concrete-finishing-machines.jpg" alt="Concrete finishing Machine" placeholder="blurred" />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>About us</h3>
              <p>We are a recently founded company based in Allenton, Derby, specializing in delivering high-quality concrete finishing solutions to the Midlands market. Our team of experienced professionals is committed to providing exceptional service and results that meet the specific needs of our customers.</p>
              <p>At our company, we take pride in our ability to deliver top-quality concrete finishing services that are tailored to meet the needs of our clients. Whether you require concrete finishing for commercial or residential projects, we are here to help you achieve your goals. Our team of skilled professionals is equipped with the latest technologies and techniques to ensure that your project is completed on time and within budget. <a href="#contact-us">Contact us today</a> to learn more about our services and how we can help you achieve your concrete finishing needs in the Midlands region.</p>
            </div>
          </div>
        </div>
        <div id="contact-us" className={styles.contactUs}>
          <div className={[styles.container, sharedStyles.container].join(' ')}>
            <h3 className={styles.title}>Contact us</h3>
            <p>We are always happy to hear from our customers and answer any questions you may have about our services. Please feel free to contact us today to schedule a consultation or request a quote.</p>
            <p>You can reach us by phone at <a href="tel:+447863972610">+44 7863972610</a> or email us at <a href="mailto:info@pkconstructions.uk">info@pkconstructions.uk</a>. We look forward to serving you soon.</p>
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
    <title>Expert Concrete Finishing Services in Derby | PK Constructions</title>
    <meta name="description" content="For top-quality concrete finishing services in Derby, trust PK Constructions. Contact us today for Tamp/Float, Power floating/Pan, Brushed, Sloped/Ramped finishes." />
    <script type="application/ld+json">
    {`{
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "PK Constructions",
      "url" : "https://www.pkconstructions.uk",
    }`}
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QGCP3X7VDG"></script>
    <script>
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-QGCP3X7VDG');`}
    </script>
  </>
);
