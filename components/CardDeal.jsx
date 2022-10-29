import Image from "next/image";
import { card } from "../public/assets";
import styles, { layout } from "../styles/style";
import Button from "./Button";
import FadeAnimation from "./FadeAnimation";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div
        className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative`}
      >
        <div className="relative w-[100%] h-[300px] md:h-[450px]">
          <Image src={card} alt="billing" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
