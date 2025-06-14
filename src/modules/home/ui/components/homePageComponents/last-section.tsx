export const LastSection = () => {
	const items = [
		{
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
		{
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
		{
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
        {
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
		{
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
		{
			image: "ring1.png",
			title: "LUXURY WATCHES",
			subtitle: "Timeless beauty",
			description:
				"Discover the perfect accessory that defines your unique sense of luxury.",
		},
	];

	return (
		<div className="py-12 px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center">
				{items.map((item, index) => {
					// Render image at odd indexes
					if (index % 2 === 0) {
						return (
							<div
								key={index}
								className="w-[395px] h-[320px] overflow-hidden"
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover bg-[#F5EDE7] transition-transform duration-500 hover:scale-105"
								/>
							</div>
						);
					}

					// Render text at even indexes
					return (
						<div key={index} className="flex flex-col gap-3 max-w-[200px]">
							<p className="text-sm font-light">{item.subtitle}</p>
							<p className="text-2xl font-semibold">{item.title}</p>
							<p className="text-base font-light">{item.description}</p>
							<button className="text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all duration-300">
								Discover More
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
