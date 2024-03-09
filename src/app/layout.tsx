import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/app/components/nav-bar/nav-bar.component";
import styles from "@/app/page.module.css";
import ModalProvider from "@/app/components/modals/modal-provider/modal.provider";
import LoginModalComponent from "@/app/components/modals/login-modal/login-modal.component";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "My Auth App",
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<NavBarComponent/>
		<main>
			{children}
		</main>
		<ModalProvider>
			<LoginModalComponent/>
		</ModalProvider>
		</body>
		</html>
	);
}
