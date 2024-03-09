'use client'

import styles from './login-modal.module.scss';

const LoginModalComponent = () => {
	return (
		<>
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
		</>
	)
}

export default LoginModalComponent;
