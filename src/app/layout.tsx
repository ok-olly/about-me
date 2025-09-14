import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"]
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Olivia Lee | Frontend Developer",
	description: "Frontend developer Olivia's portfolio"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${openSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
