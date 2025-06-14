export const NewCollection = () => {
    return (
        <div >
            <div className="relative ">
            <div className="flex m-4 justify-center text-center">
            <h2 className=" text-4xl mb-3 font-light">New Collection</h2>
            <span className="absolute  bottom-0 h-[2px] w-14  bg-yellow-800"></span>
            </div>
            </div>
            <div className="flex  justify-center items-center gap-5">
                <div className="flex flex-col items-end gap-4">
                    <div className="xl:w-[512px] xl:h-[558px] overflow-hidden">
                        <img src="jwel1.jpg" alt=""  className=" w-full h-full object-cover  transition-transform duration-500 hover:scale-105"/>
                    </div>
                    <div className="flex justify-between gap-3">
                    <div className="hidden xl:flex ">
                        <div className="flex flex-col justify-center items-center">
                        <p className = "text-xl font-semibold mb-2">Discover <br /> New Arrivals</p>
                        <button className="text-lg border-1 border-black p-4 hover:bg-black hover:text-white">Discover More</button>
                        </div>
                    </div>
                    <div className = "xl:w-[363px] xl:h-[397px] overflow-hidden">
                        <img src="jwel2.jpg" alt="" className=" w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                    </div>

                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-3">
                    <div className = "xl:w-[363px] xl:h-[397px] overflow-hidden">
                        <img src="jwel4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="hidden xl:flex ">
                        <div className="flex flex-col justify-center items-center">
                        <p className = "text-xl font-semibold mb-2">Discover <br /> New Arrivals</p>
                        <button className="text-lg border-1 border-black p-4 hover:bg-black hover:text-white">Discover More</button>
                        </div>
                    </div>
                    </div>
                    <div className="xl:w-[512px] xl:h-[558px] overflow-hidden ">
                        <img src="jwel3.jpg" alt="" className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105 " />
                    </div>
                </div>
            </div>
        </div>
    )
};