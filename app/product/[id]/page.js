import styles from "./page.module.css";
import Image from "next/image";
import AddToBag from "../AddToBag";
import { formatPrice } from "../../util";

export default async function page({params}) {
  const {id} = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await data.json();
  return (
    <div className={`${styles['product-page']} container`}>
        <section className={styles.photo}>
                <Image
                    src={product.images[0]}
                    alt={`Image for ${product.title}`}
                    width={344}
                    height={344}
                />
        </section>
        <section className={styles.info}>
            <h1>{product.title}</h1>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p>{product.description}</p>
            <AddToBag product={product} />
        </section>
    </div>
  )
}
