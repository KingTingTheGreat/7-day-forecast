import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome to our application!</title>
				<meta name="description" content="our app that does cool stuff" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={`${styles.main} ${inter.className}`}>
				<div>welcome to our app</div>
			</main>
		</>
	);
}
