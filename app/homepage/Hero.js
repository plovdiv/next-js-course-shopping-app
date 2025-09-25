import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        width={1438}
        height={527}
      />
    </div>
  )
}
