import PaginatedList from "./PaginatedList";
import styles from "./products.module.css";
import CategoryFilter from "./CategoryFilter";
export default async function Products({ category }) {
    const data = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8`)
    const products = await data.json();

    const catData = await fetch(`https://dummyjson.com/products/categories`)
    const categories = await catData.json();
    return (
        <div className={`${styles['products-list']} container`}>
            <CategoryFilter categories={categories} activeCategory={category} />
            <ul className={styles.products} >
                <PaginatedList
                    category={category}
                    initialProducts={products.products}
                    totalProducts={products.total}
                />
            </ul>
        </div>
    )
}
