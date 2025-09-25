import styles from './productsList.module.css';
import ProductCard from "../components/ProductCard";

const sleep = async () => {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

export default async function ProductsList() {
    await sleep();
    const data = await fetch('https://dummyjson.com/products?limit=12&sortBy=rating&order=desc')
    const products = await data.json();
    return (
        <ul className={styles['products-list']}>
            {
                products.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </ul>
    )
}
