import {signIn} from "next-auth/react";

const SignInButtonComponent = () => {
	return (
		<button type="button" onClick={() => signIn('github')}>sign in</button>
	)
}

export default SignInButtonComponent;
