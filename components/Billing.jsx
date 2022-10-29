import Image from "next/image";
import { apple, bill, google } from "../public/assets";
import styles, { layout } from "../styles/style";

const Billing = () => {
  return (
    <section
      id="product"
      className={`flex md:items-center md:flex-row flex-col-reverse`}
    >
      <div
        className={`flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <div className="w-[100%] h-[300px] md:h-[550px] relative z-[5]">
          <Image src={bill} alt="billing" layout="fill" />
        </div>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <div className="relative w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer">
            <Image src={apple} alt="google_play" layout="fill" />
          </div>

          <div className="relative w-[144.17px] h-[43.08px] object-contain cursor-pointer">
            <Image src={google} alt="google_play" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
