/** biome-ignore-all assist/source/organizeImports: <explanation> */
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Press_Start_2P } from "next/font/google";
import ClientSideInit from "@/app/providers/ClientSideInit";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import GlobalModals from "@/app/providers/GlobalModals";
import SidebarMargin from "@/widgets/Sidebar/ui/SidebarMargin";
import SplashScreen from "@/app/providers/SplashScreen";
import MusicProvider from "@/app/providers/MusicProvider";
import type { Metadata } from "next";
import { CustomToastContainer } from "@/shared/ui/toast/CustomToastContainer";

export const metadata: Metadata = {
	title: "Menu | Notakto",
	description: "No ties, Always a winner",
	keywords: [
		"Notakto",
		"misère Tic Tac Toe",
		"X only",
		"Tic Tac Toe variant",
		"retro games",
		"multiplayer",
		"AI board game",
	],
	authors: [{ name: "Notakto Team" }],
	creator: "Notakto Team",
};
const pressStart2P = Press_Start_2P({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={pressStart2P.className}>
			<head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4854199776978392"
					crossOrigin="anonymous"></script>
				<meta
					name="google-site-verification"
					content="lxHtpLX2cDKFEAAabqQ3-9IY-ckiw3KvqM3Z1kNPxRo"
				/>
				<meta name="monetag" content="31cbc3974b21341db36f756db33d15d6"></meta>
			</head>
			<body className="bg-bg0 text-pixel-white">
				<MusicProvider />
				<SplashScreen />
				<Sidebar />
				<SidebarMargin>{children}</SidebarMargin>
				<GlobalModals />
				<CustomToastContainer />
				<Analytics />
				<SpeedInsights />
				<ClientSideInit />
			</body>
		</html>
	);
}
