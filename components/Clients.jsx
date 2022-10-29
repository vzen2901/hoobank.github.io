import Image from "next/image";
import { clients } from "../utils/content";
import styles from "../styles/style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-10`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <div className="relative sm:w-[192px] w-[100px] sm:h-[50px] h-[50px]">
              <Image layout="fill" src={client.logo} alt="client_logo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
