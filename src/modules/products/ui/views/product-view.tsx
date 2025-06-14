"use client";

// TODO: Add real ratings
import axios from "axios";
// import Image from "next/image";
import { toast } from "sonner";
import {  ShoppingCart, StarIcon } from "lucide-react";
import {  useEffect, useState } from "react";

import { ProductType } from "@/utils/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
import { StarRating } from "@/components/star-rating";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Review } from "../components/review";

interface ProductViewProps {
	productId: string;
}

export const ProductView = ({ productId }: ProductViewProps) => {
	const [data, setData] = useState<ProductType>();
	const [isLoading, setIsLoading] = useState(false);

	const fetchProduct = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post("/api/products/getProductById", {
				productId,
			});
			// console.log(response.data);
			setData(response.data.data);
		} catch (err: unknown) {
			if (err instanceof Error) {
				toast.error(err.message);
			}
			toast.error("Unable to fetch product");
		} finally {
			setIsLoading(false);
		}
	};
	const features = ["Boommmm", "djhgdjhdj", "djhfdfdfhkf", "jfhjdfhdhfdhfhf"];

	useEffect(() => {
		fetchProduct();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return <div>No data</div>;
	}

	return (
		<div className="w-full h-full relative">
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 border-b border-gray-500 pb-5">
				<div className=" relative w-full h-full">
					<img
						src={data?.image ?? ""}
						alt="cover"
						className=" object-cover h-full w-full "
					/>
				</div>

				<div className="space-y-6 p-6">
					{/* Product Name */}
					<h1 className="text-4xl font-semibold">{data?.name}</h1>

					{/* Price Section */}
					<div className="flex items-center">
						<p className="text-2xl font-medium text-gray-800">
							{formatCurrency(data?.price ?? 0)}
						</p>
					</div>

					{/* Mobile Rating (visible on small screens only) */}
					<div className="block lg:hidden border-b border-black pb-4">
						<div className="flex items-center gap-1">
							<StarRating rating={4} iconClassName="size-4" />
							<p className="text-base font-medium">{5} ratings</p>
						</div>
					</div>

					{/* Ratings Label */}
					<div className="flex items-center gap-3">
						<h3 className="text-xl font-medium">Ratings</h3>
						<div className="flex gap-1">
							{[1, 2, 3, 4, 5].map((_, index) =>
								index < 4 ? (
									<StarIcon
										key={index}
										className="w-4 h-4 text-yellow-500 fill-yellow-500"
									/>
								) : (
									<StarIcon
										key={index}
										className="w-4 h-4 text-gray-300 fill-gray-300"
									/>
								)
							)}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col gap-4 items-center">
						<Button
							variant="dark"
							size="dark"
							className="w-full max-w-md bg-[#F5EDE6] hover:bg-[#e6dbd1]"
						>
							Add To Cart <ShoppingCart className="ml-2" />
						</Button>
						<Button
							variant="dark"
							size="dark"
							className="w-full max-w-md bg-amber-600 hover:bg-amber-700"
						>
							Buy Now <ShoppingCart className="ml-2" />
						</Button>
					</div>

					{/* Description */}
					<div>
						{data?.description ? (
							<p className="text-base leading-relaxed text-gray-700">
								{data.description}
							</p>
						) : (
							<p className="font-medium text-muted-foreground italic">
								No Description Provided
							</p>
						)}
					</div>
				</div>

				<div className=" ">
					<div className="flex flex-col mt-4 border border-gray-300 ">
						<Accordion
							type="multiple"
							defaultValue={["item-1", "item-2", "item-3"]} // This makes "Product Information" open initially
						>
							<AccordionItem
								value="item-1"
								className="border-b border-gray-500"
							>
								<AccordionTrigger className="bg-[#EEEEEE] text-lg border-none rounded-none px-3">
									Product Information
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-col text-base">
										<div className="flex justify-start gap-28 px-3 pt-1">
											<span className="font-medium">
												Material
											</span>
											<span>Silver</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-2"
								className="border-b border-gray-500"
							>
								<AccordionTrigger className="bg-[#EEEEEE] text-lg border-none rounded-none px-3">
									Description
								</AccordionTrigger>
								<AccordionContent>
									<p className="text-start text-base px-3 pt-3">
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Nesciunt ipsam
										excepturi qui culpa.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-3"
								className="border-b border-gray-500"
							>
								<AccordionTrigger className="bg-[#EEEEEE] text-lg border-none rounded-none px-3">
									Features
								</AccordionTrigger>
								<AccordionContent>
									{features && features.length > 0 ? (
										features.map((feature, index) => (
											<div
												key={index}
												className="flex flex-col text-lg"
											>
												<div className="flex justify-start px-3 pt-1 items-center gap-2">
													<StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
													<span className="text-base">
														{feature}
													</span>
												</div>
											</div>
										))
									) : (
										<p className="text-start px-3 pt-3">
											No features provided
										</p>
									)}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
			<div className="border-b border-gray-300 py-4 mb-2">
				<h2 className="text-2xl font-bold mb-3 text-left p-3">Description</h2>
				<p className="text-lg px-4  text-gray-700">
					{data?.description ? data.description : "No description"}
				</p>
			</div>
			<Review/>
		</div>
	);
};
