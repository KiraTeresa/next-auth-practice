'use client'

import styles from './login-modal.module.scss';
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";
import SignInButtonComponent from "@/app/components/sign-in/sign-in-button.component";

const LoginModalComponent = () => {
	const {onClose} = useContext(ModalContext);

	return (
		<>
			<SignInButtonComponent/>
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
			<button type="button" onClick={() => onClose()}>close</button>
		</>
	)
}

export default LoginModalComponent;
