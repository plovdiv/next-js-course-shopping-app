'use client';
import styles from './addToBag.module.css';
import { useBasket } from '../context/BasketContext';
import { useState } from 'react';

export default function AddToBag({ product }) {
    const { addToBag, updateQuantity, removeFromBag, items } = useBasket();
    const itemInBag = items.find(item => item.id === product.id);
    const [quantity, setQuantity] = useState(itemInBag ? itemInBag.quantity : 1);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1 || newQuantity > product.stock) return;
        setQuantity(newQuantity);
        if (itemInBag) {
            updateQuantity(product.id, newQuantity);
        }
    }
    return (
        <div className={styles['add-to-bag']}>

            <div className={styles.quantity}>
                <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="minimal"
                >
                    -
                </button>
                <input disabled value={quantity} />
                <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                    className="minimal"
                >
                    +
                </button>
            </div>
            {
                itemInBag ? (
                    <div className={styles.actions}>
                        <p>Added to basekt!</p>
                        <button onClick={() => removeFromBag(product.id)} className='outline'>Remove</button>
                    </div>
                ) : (
                    <button onClick={() => addToBag(product, quantity)}>Add to Bag</button>
                )
            }
        </div>
    )
}
