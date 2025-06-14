"use client";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

interface Product {
	name: string;
	img: string;
	price:number;         
}

export const ProductCarousal = ({ products }: { products: Product[] }) => {
	if (!Array.isArray(products) || products.length === 0) {
		return <p className="text-center text-gray-500">No products found.</p>;
	}

	return (
		<div className="flex items-center justify-center w-full">
			<div className="m-12 relative w-[90%] h-[60vh]">
				<Carousel>
					<CarouselContent>
						{products.map((item, index) => (
							<CarouselItem
								key={index}
								className="basis-1/2 sm:basis-1/4 lg:basis-1/5"
							>
								<Card className="group relative p-4 flex flex-col h-[400px] items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="relative w-full h-[400px] overflow-hidden  border border-gray-200">
										<img
											src={item.img}
											alt={item.name}
											className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
										/>

										{/* Fancy Border Animation */}
										<span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
										<span className="absolute left-0 top-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
										<span className="absolute right-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
										<span className="absolute right-0 bottom-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
									</div>
                                    
									<div className=" text-center">
										<p className="text-sm font-medium">{item.name}</p>
										<p className="text-lg font-bold text-yellow-600">${item.price}</p>
									</div>

									<button className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
										Add to Cart <ArrowRight size={16} />
									</button>
								</Card>
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
