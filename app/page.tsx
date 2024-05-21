import Image from "next/image";

export default function Home() {
	return (
		<main className='bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-gray-950 flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 md:p-24'>
			<h1 className='text-4xl sm:text-5xl md:text-7xl font-black text-indigo-300 text-center'>
				UPSURGE LABS
			</h1>
			<p className='text-white text-base sm:text-md md:text-lg max-w-screen-md text-center font-light pt-4 sm:pt-6'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
				elit ipsum, auctor at massa ac, ornare ultrices libero. Donec at
				purus nec nibh auctor at massa.
			</p>
			<div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6'>
				<button className='bg-indigo-600 px-6 py-2 sm:px-8 sm:py-2 rounded font-bold text-base sm:text-lg text-white transition transform hover:scale-95'>
					About Us
				</button>
				<button className='bg-white px-6 py-2 sm:px-8 sm:py-2 rounded font-bold text-base sm:text-lg text-indigo-600 transition transform hover:scale-95'>
					Get In Touch
				</button>
			</div>
		</main>
	);
}
