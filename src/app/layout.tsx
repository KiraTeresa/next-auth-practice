import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav-bar/nav-bar";
import styles from "@/app/page.module.css";

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
		<NavBar/>
		<main>
			{children}
		</main>
		</body>
		</html>
	);
}
