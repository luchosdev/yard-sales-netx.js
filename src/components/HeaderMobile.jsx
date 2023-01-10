import React from 'react';
import styles from '@styles/HeaderMobile.module.scss';
import Link from 'next/link';

const HeaderMobile = () => {
    return (
        <div className={styles['mobile-menu']}>
            <ul>
                <li>
                    <Link href="/">CATEGORIES</Link>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">Clothes</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furnitures</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Other</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/" className={styles.email}>
                        platzi@example.com
                    </Link>
                </li>
                <li>
                    <Link href="/" className={styles['sign-out']}>
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderMobile;
