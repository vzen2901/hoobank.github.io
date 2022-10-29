import Image from "next/image";

import styles from "../styles/style";
import { arrowUp } from "../public/assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient p-[2px] cursor-pointer rounded-full`}
    >
      <div
        className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className="flex flex-col">
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Get</span>
            </p>

            <div className="relative w-[23px] h-[23px] object-contain">
              <Image
                src={arrowUp}
                alt="arrow-up"
                layout="fill"
                placeholder="empty"
              />
            </div>
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
