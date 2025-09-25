'use client'
import { useRouter } from 'next/navigation';
import styles from './categoryFilter.module.css';
export default function CategoryFilter({ categories, activeCategory }) {
    const router = useRouter();

    const handleCategory = (slug) => {
        if (!slug || slug === activeCategory) {
            router.push('/products');
        } else {
            router.push(`/products/${slug}`);
        }
    }
    return (
        <ul className={styles['category-filter']}>
            {
                categories.length ? categories.map((category) => (
                    <li
                        key={category.slug}
                        className={activeCategory === category.slug ? styles.active : ''}
                        onClick={() => handleCategory(category.slug)}
                    >
                        {category.name}
                    </li>
                )) : ''
            }
        </ul>
    )
}
