import styles from "./page.module.css";
import BasketItems from "./BasketItems";


export default function page() {
    return (
        <div className={styles.basket}>
            <div className="page-header">
                <h1>Basket Page</h1>
            </div>
            <BasketItems />
        </div>
    )
}
