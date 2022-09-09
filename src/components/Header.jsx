import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import HeaderMobile from '@components/HeaderMobile';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu, toggleHeaderMobile } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<Image src={menu.src} alt="menu" className={styles.menu}
					onClick={() => toggleHeaderMobile()}
					aria-hidden="true"
					height={24}
					width={24}
				/>
				<div className={styles['navbar-left']}>
					<Link href="/">
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
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
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li
							className={styles['navbar-email']}
							onClick={() => toggleMenu()}
							aria-hidden="true"
						>
							platzi@example.com
						</li>
						<li
							className={styles['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
							aria-hidden="true" >
							<Image className={styles['more-clickable-area']}
									src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.HeaderMobileIsOpen && <HeaderMobile />}
			{state.orderIsOpen && <MyOrder />}
		</>
	);
};

export default Header;
