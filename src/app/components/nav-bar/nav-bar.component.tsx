'use client'
import styles from './nav-bar.module.scss';
import Link from "next/link";
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";

const NavBarComponent = () => {
	const {onOpen} = useContext(ModalContext);

	return (
		<nav className={styles.navBar}>
			<ul>
				<li><Link href="/">HOME</Link></li>
				<li><Link href="/profile">PROFILE</Link></li>
				<li onClick={() => onOpen('login')}>LOGIN</li>
			</ul>
		</nav>
	)
}

export default NavBarComponent;
