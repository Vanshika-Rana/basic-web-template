"use client";
import { useEffect } from "react";

export const Header = () => {
	const scrollToContent = () => {
		const contentSection = document.getElementById("content");
		if (contentSection) {
			contentSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const scrollButton = document.getElementById("scroll-button");
		if (scrollButton) {
			scrollButton.addEventListener("click", scrollToContent);
		}
		return () => {
			if (scrollButton) {
				scrollButton.removeEventListener("click", scrollToContent);
			}
		};
	}, []);

	return (
		<div className='relative text-center  flex justify-center items-center lg:h-[90vh] '>
			<div className='absolute inset-x-0 bottom-0'>
				<svg
					viewBox='0 0 224 12'
					fill='currentColor'
					className='w-full -mb-1 text-blue-950 animate-pulse'
					preserveAspectRatio='none'>
					<defs>
						<radialGradient
							id='glowGradient'
							cx='50%'
							cy='50%'
							r='50%'
							fx='50%'
							fy='50%'>
							<stop
								offset='0%'
								stopColor='#6748f2'
								stopOpacity='1'
							/>
							<stop
								offset='100%'
								stopColor='#6748f2'
								stopOpacity='0'
							/>
						</radialGradient>
					</defs>
					<path
						d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'
						fill='url(#glowGradient)'
					/>
				</svg>
			</div>
			<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
					<h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-indigo-400 md:text-5xl lg:text-7xl sm:leading-none'>
						UPSURGE INNOVATION LABS
					</h2>
					<p className='mb-6 text-base text-indigo-100 md:text-lg'>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam.
					</p>
					<a
						href='#content'
						id='scroll-button'
						aria-label='Scroll down'
						className='flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='currentColor'>
							<path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};
