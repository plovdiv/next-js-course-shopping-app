'use client';
import { useBasket } from '../context/BasketContext';

export default function BasketCount() {
    const { items } = useBasket();
    console.log('Basket items in header:', items);
  return (
    items.length ?  <span>{items.length}</span> : ''
  )
}
