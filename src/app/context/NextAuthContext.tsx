'use client'

import {SessionProvider} from "next-auth/react";
import React from "react";

const NextAuthContext = ({children}: {children: React.ReactNode}) => {
	return (
		<SessionProvider>{children}</SessionProvider>
	)
}

export default NextAuthContext;
