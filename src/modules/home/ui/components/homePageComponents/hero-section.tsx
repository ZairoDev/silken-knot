"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false })
	);

	const hero = [
		{
			heading: "Transform Your Digital Experience",
			description:
				"Discover innovative solutions that drive growth and elevate your business to new heights. Join thousands of satisfied customers who trust our platform.",
			img: "ring1.png",
			buttonText: "Get Started",
			accent: "from-blue-600 to-purple-600",
		},
		{
			heading: "Unleash Your Creative Potential",
			description:
				"Empower your team with cutting-edge tools and technologies designed to streamline workflows and boost productivity across all departments.",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnYHPSuuAffq_RyIJD_V7_UezCe8KBipEjWiWsM6sDK61BeWkuFospuxHcr63EA8MmXE&usqp=CAU",
			buttonText: "Learn More",
			accent: "from-emerald-600 to-teal-600",
		},
	];

	return (
		<div className="relative w-full h-[100vh] overflow-hidden bg-amber-100">
			{/* Background gradient overlay */}
			{/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-10 z-10" /> */}

			<Carousel
				plugins={[plugin.current]}
				className="w-full h-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent className="h-full ">
					{hero.map((heroItem, index) => (
						<CarouselItem key={index} className="h-full">
							<div className="relative h-full w-full">
								{/* Background Image */}

								{/* Content */}
								<div className="relative z-20 h-full flex items-center lg:mt-16">
									<div className="container mx-auto px-4 sm:px-6 lg:px-8">
										<div className="grid lg:grid-cols-2 gap-12 items-center">
											{/* Text Content */}
											<div className="text-white space-y-8">
												<div className="space-y-6">
													<h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold leading-tight">
														<span className="block">
															{heroItem.heading
																.split(" ")
																.slice(0, 2)
																.join(" ")}
														</span>
														<span
															className={`block bg-gradient-to-r ${heroItem.accent} bg-clip-text text-transparent`}
														>
															{heroItem.heading
																.split(" ")
																.slice(2)
																.join(" ")}
														</span>
													</h1>

													<p className="text-lg sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
														{heroItem.description}
													</p>
												</div>

												{/* CTA Buttons */}
												<div className="flex flex-col sm:flex-row gap-4">
													<Button
														size="lg"
														className={`bg-gradient-to-r ${heroItem.accent} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
													>
														{heroItem.buttonText}
													</Button>
												</div>

												{/* Stats or Features */}
												<div className="flex flex-wrap gap-8 pt-8">
													<div className="text-center">
														<div className="text-xl lg:text-3xl font-bold text-white">
															10K+
														</div>
														<div className="text-gray-400">
															Happy Customers
														</div>
													</div>
													<div className="text-center">
														<div className="text-xl lg:text-3xl font-bold text-white">
															99.9%
														</div>
														<div className="text-gray-400">
															Uptime
														</div>
													</div>
													<div className="text-center">
														<div className="text-xl lg:text-3xl font-bold text-white">
															24/7
														</div>
														<div className="text-gray-400">
															Support
														</div>
													</div>
												</div>
											</div>

											<div className="">
												<img
													src={
														heroItem.img ||
														"/placeholder.svg"
													}
													alt={`Hero ${index + 1}`}
													// fill
													className="object-fit lg:h-[400px] w-full "
													// priority={index === 0}
												/>
												{/* <div className="absolute inset-0 bg-black/40" /> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Custom Navigation */}
				<CarouselPrevious className="left-4 sm:left-8 bg-black/10 backdrop-blur-sm border-white/20 text-black hover:bg-white/20 w-12 h-12" />
				<CarouselNext className="right-4 sm:right-8 bg-black/10 backdrop-blur-sm border-white/20 text-black hover:bg-white/20 w-12 h-12" />

				{/* Dots Indicator */}
				<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
					{hero.map((_, index) => (
						<div
							key={index}
							className="w-3 h-3 rounded-full bg-black/30 hover:bg-white/60 transition-colors duration-300 cursor-pointer"
						/>
					))}
				</div>
			</Carousel>

			{/* Decorative Elements */}
			<div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
		</div>
	);
};
