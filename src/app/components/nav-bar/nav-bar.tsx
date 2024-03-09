'use client'
import styles from './nav-bar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul>
				<li>HOME</li>
				<li>PROFILE</li>
			</ul>
		</nav>
	)
}

export default NavBar;
