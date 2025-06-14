export const TwoProduct = () => {
	return (
		<div className = "flex items-center justify-center w-full h-full">
			<div className="w-screen h-[100%] grid grid-cols-1  lg:grid-cols-2 gap-4">
				<div className="flex flex-row items-center-safe justify-center bg-[rgb(245,245,245)] gap-2">
					<div className="w-[319px] h-[500px]">
                        <img src="ring1.png" alt="" className="w-full h-[90%] object-cover" />
                    </div>
					<div className="flex flex-col items-end gap-3">
                        <p className="text-sm font-light">Timeless beauty</p>
                        <p className="text-2xl font-semibold">
                            LUXURY WATCHES
                        </p>
                        <p className="text-base font-light">Discover the perfect accessory that <br /> defines your unique sense of luxury.</p>
                        <button className="text-lg border-1 border-black py-1 px-4 hover:bg-black hover:text-white">Discover More</button>
                    </div>
				</div>
				<div className="flex flex-row items-center-safe justify-center bg-[rgb(245,237,230)] gap-2">
				
					<div className="flex flex-col items-start gap-3">
                       <p className="text-sm font-light">Timeless beauty</p>
                        <p className="text-2xl font-semibold">
                            LUXURY WATCHES
                        </p>
                        <p className="text-base font-light">Discover the perfect accessory that <br /> defines your unique sense of luxury.</p>
                        <button className="text-lg border-1 border-black py-1 px-4 hover:bg-black hover:text-white">Discover More</button>
                    </div>
					<div className="w-[319px] h-[500px]">
                        <img src="ring1.png" alt="" className="w-full h-[90%] object-cover" />
                    </div>
			
				</div>
			</div>
		</div>
	);
};
