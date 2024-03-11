import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/app/components/nav-bar/nav-bar.component";
import styles from "@/app/page.module.css";
import LoginModalComponent from "@/app/components/modals/login-modal/login-modal.component";
import { ModalProviderWrapper} from "@/app/context/ModalContext";

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
		<ModalProviderWrapper>
			<NavBarComponent />
			<main>
				{children}
			</main>
			<LoginModalComponent/>
		</ModalProviderWrapper>
		</body>
		</html>
	);
}
