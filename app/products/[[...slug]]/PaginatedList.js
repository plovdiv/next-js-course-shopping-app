'use client'
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import Loader from "../../components/Loader";

export default function PaginatedList({ initialProducts, totalProducts, category }) {
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const sleep = async () => {
        return new Promise(resolve => setTimeout(resolve, 3000))
    }
    const handleLoadMore = async () => {
        setError('');
        setLoading(true);
        await sleep();
        try {
            const res = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8&skip=${products.length}`)
            const data = await res.json();
            setProducts([...products, ...data.products]);
        } catch (error) {
            setError("Faild to load products");

        } finally {
            setLoading(false);
        }

    }
    return (
        <>
            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))
            }
            {
                products.length < totalProducts ?
                    <button disabled={loading} onClick={handleLoadMore}>
                        {loading ? <Loader /> : 'Load More'}
                    </button> : ''
            }
            <p>Showing {products.length} of {totalProducts} products</p>
            {
                error &&
                <p>{error}</p>
            }

        </>
    )
}
