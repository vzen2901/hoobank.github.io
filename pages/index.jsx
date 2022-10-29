import { useState } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "../components";
import styles from "../styles/style";

const Home = () => {
  const [sticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <Head>
        <title>Hoobank</title>
        <meta name="description" content="Landing website for Hoobank" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className="w-full overflow-hidden bg-primary">
        <Sticky innerZ={100} onStateChange={handleStateChange}>
          <div
            className={`${styles.paddingX} ${styles.flexCenter} ${
              sticky ? "bg-black" : "bg-transparent"
            }`}
          >
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </Sticky>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
