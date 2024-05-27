import Image from "next/image";
import { Header } from "../components/Header";
import { Content } from "@/components/Content";
import { Venture } from "@/components/Ventures";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function Home() {
	return (
		<div className='tracking-wide min-h-screen animated-background bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black'>
			<Header />
			<Content />
			<Venture />
			<Contact/>
			<Footer />
		</div>
	);
}
