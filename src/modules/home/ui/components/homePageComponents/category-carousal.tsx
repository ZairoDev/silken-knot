"use client";
// import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
export const CategoryCarousal = () => {
	const category = [
		{ name: "Rings", img: "" },
		{ name: "Bracelet", img: "" },
		{ name: "Chains", img: "" },
		{ name: "Chocker", img: "" },
		{ name: "Cufflinks", img: "" },
		{ name: "Earrings", img: "" },
		{ name: "Gemstone", img: "" },
		{ name: "Giftset", img: "" },
		{ name: "Watch", img: "" },
		{ name: "Necklace", img: "" },
	];
	return (
		<div className=" flex items-center justify-center">
			<div className=" m-12 relative w-[90%] h-[30vh]">
				<Carousel>
					<CarouselContent>
						{category.map((item, index) => (
							<CarouselItem key={index} className=" basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6">
								<div className=" flex flex-col items-center relative group  justify-center">
									<div className=" flex items-center relative group justify-center bg-gray-300 p-6">
										<span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
										<span className="absolute left-0 top-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
										<span className="absolute right-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
										<span className="absolute right-0 bottom-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
										<img
											src="ring1.png"
											alt=""
											className="object-fit "
										/>
									</div>
									<p className="group-hover:text-yellow-500">{item.name}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4 sm:-left-12 bg-black/10 backdrop-blur-sm border-white/20 text-black hover:bg-white/20 w-12 h-12" />
					<CarouselNext className="right-1 sm:-right-12 bg-black/10 backdrop-blur-sm border-white/20 text-black hover:bg-white/20 w-12 h-12" />
				</Carousel>
			</div>
		</div>
	);
};
