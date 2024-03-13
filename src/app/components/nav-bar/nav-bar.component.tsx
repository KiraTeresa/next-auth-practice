'use client'
import styles from './nav-bar.module.scss';
import Link from "next/link";
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";
import {useSession} from "next-auth/react";
import {signOut} from "next-auth/react";

const NavBarComponent = () => {
	const {onOpen} = useContext(ModalContext);
	const {status} = useSession();

	return (
		<nav className={styles.navBar}>
			<ul>
				<li><Link href="/">HOME</Link></li>
				<li><Link href="/profile">PROFILE</Link></li>
				{status === 'authenticated' ?
					<li onClick={() => signOut()}>logout</li> :
					<li onClick={() => onOpen('login')}>login</li>
				}
			</ul>
		</nav>
	)
}

export default NavBarComponent;
