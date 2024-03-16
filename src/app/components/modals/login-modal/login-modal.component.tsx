'use client'

import styles from './login-modal.module.scss';
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";
import SignInButtonComponent from "@/app/components/sign-in-button/sign-in-button.component";

const LoginModalComponent = () => {
	const {onClose} = useContext(ModalContext);

	return (
		<div className={styles.loginModal}>
			<button className={styles.exitBtn} type="button" onClick={() => onClose()}>X</button>
			<form className={styles.loginForm}>
				<section>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username"/>
				</section>
				<section>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password"/>
				</section>
				<button type="submit">login</button>
			</form>
			<SignInButtonComponent/>
		</div>
	)
}

export default LoginModalComponent;
