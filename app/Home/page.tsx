import styles from "./Home.module.css";
import Image from "next/image";
import { BsStar } from "react-icons/bs";
import GetMessage from "../components/Messange/GetMessage";
import { FaGlassMartini } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";

export default function Home() {
  const myIcons = [
    {
      id: 1,
      icon: <FaGlassMartini />,
      title: "Beverages included",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.",
    },
    {
      id: 2,
      icon: <CiCreditCard1 />,
      title: "Stay First, Pay After!",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.",
    },
    {
      id: 3,
      icon: <MdOutlineRestaurant />,
      title: "24 Hour Restaurant",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.",
    },
    {
      id: 4,
      icon: <FaDroplet />,
      title: "Spa Included!",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.",
    },
  ];
  return (
    <main>
      <section className={styles.sect1}>
        <Image
          src="/slide-bg.jpg"
          alt="cover"
          width={1440}
          height={331}
          className={styles.coverImg}
        />
        <div className={styles.coverTxt}>
          <h1>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            Five Star Hotels
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </h1>
          <p>And we like to keep it that way!</p>
          <button>SEE HOTELS</button>
        </div>
      </section>
      {/* sect 2 */}
      <section className={styles.sect2}>
        <div className={styles.d1}>
          <div className={styles.titleDiv}>
            <div></div>
            <h1>Guests Favorite Rooms</h1>
            <div></div>
          </div>
        </div>
        <div className={styles.rooms}>
          <GetMessage />
        </div>
        <div className={styles.uspSection}>
          <div className={styles.titleDiv}>
            <div></div>
            <h1>USP section</h1>
            <div></div>
          </div>
          <div className={styles.iconDiv}>
            {myIcons.map((icons) => (
              <div key={icons.id} className={styles.boxDiv}>
                <div className={styles.icon}>{icons.icon}</div>
                <div className={styles.title}>
                  <h3>{icons.title}</h3>
                </div>
                <div className={styles.info}>
                    <p>
                        {icons.info}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
