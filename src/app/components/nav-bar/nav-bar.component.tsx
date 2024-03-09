'use client'
import styles from './nav-bar.module.scss';
import Link from "next/link";

const NavBarComponent = () => {
	return (
		<nav className={styles.navBar}>
			<ul>
				<li><Link href="/">HOME</Link></li>
				<li><Link href="/profile">PROFILE</Link></li>
				<li>LOGIN</li>
			</ul>
		</nav>
	)
}

export default NavBarComponent;
