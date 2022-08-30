import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image loader={() => product?.images[0]}
						src={product?.images[0]}
						alt={product?.title}
						width={50}
						height={50}
						layout="responsive"/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={styles['more-clickable-area'], styles['remove-item']}
					src={close} alt="close"
					onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
