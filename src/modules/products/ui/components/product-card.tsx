import Link from "next/link";
import Image from "next/image";
import { ArrowRight, StarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
	id: string;
	name: string;
	imageUrl?: string | null;
	tenantSlug: string;
	tenantImageUrl?: string | null;
	reviewRating: number;
	reviewCount: number;
	price: number;
}

export const ProductCard = ({
	id,
	name,
	imageUrl,
	tenantSlug,
	tenantImageUrl,
	reviewRating,
	reviewCount,
	price,
}: ProductCardProps) => {
	return (
		<Link href={`/products/${id}`}>
			<Card className="group relative p-4 flex flex-col h-[400px] items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
				<div className="relative w-full h-full overflow-hidden  border border-gray-200">
					<img
						src={imageUrl || "ring.png"}
						alt="image"
						className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
					/>
				</div>

				<div className=" flex flex-col text-center justify-center items-center">
					<p className="text-sm font-medium">{name}</p>
					{reviewCount > 0 && (
						<div className=" flex items-center gap-1">
							{Array.from({ length: 5 }).map((_, index) =>
								index < Math.round(reviewRating) ? (
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


							<p className=" text-sm font-medium">
								{reviewRating} ({reviewCount})
							</p>
						</div>
					)}
					<div className=" p-4 ">
						<div className=" relative text-yellow-600 w-fit">
							<p className=" text-xl font-medium">
								{new Intl.NumberFormat("en-US", {
									style: "currency",
									currency: "USD",
									maximumFractionDigits: 0,
								}).format(Number(price))}
							</p>
						</div>
					</div>
				</div>

				<button className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-yellow-600 transition-all duration-300">
					Add to Cart <ArrowRight size={16} className="hidden group-hover:inline"/>
				</button>
				{/* Fancy Border Animation */}
				<span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
				<span className="absolute left-0 top-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
				<span className="absolute right-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
				<span className="absolute right-0 bottom-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 delay-100 group-hover:h-full" />
			</Card>
		</Link>
	);
};

export const ProductCardSkeleton = () => {
	return <div className=" w-full aspect-3/4 bg-neutral-200 animate-pulse" />;
};
