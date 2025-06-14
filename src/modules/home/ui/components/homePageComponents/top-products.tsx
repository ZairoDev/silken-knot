'use client'
import { ProductCarousal } from "@/modules/products/ui/components/products-carousal";
import { useState } from "react"

export const TopProducts = ()=>{
    const [category,setcategory] = useState("Rings");
    const rings = [
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200},
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200 },
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200},
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200},
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200},
        { name: "Rings", img: "https://enovathemes.com/joice/wp-content/uploads/product132-300x300.webp" ,price:200},]

    const earrings = [
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
        { name: "Earrings", img: "https://enovathemes.com/joice/wp-content/uploads/product21-300x300.webp" ,price:200},
    ]

    const necklace = [
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
        { name: "Necklace", img: "https://enovathemes.com/joice/wp-content/uploads/product16-300x300.webp" ,price:200},
    ]
    return(
        <div className="my-6">
            <div className="relative ">
            <div className="flex m-4 justify-center text-center">
            <h2 className=" text-4xl mb-3 font-light">Top Products</h2>
            <span className="absolute  bottom-0 h-[2px] w-14  bg-yellow-800"></span>
            </div>
            </div>
            <div>
                <div className="flex flex-row justify-center gap-3 text-xl font-semibold">
                    <button className= {category === "Rings" ? `border-2 border-yellow-600 text-yellow-600 cursor-pointer w-[150px] h-[42px]` :`bg-slate-200 w-[150px] h-[42px] cursor-pointer shadow-md`} onClick={()=>setcategory("Rings")}>Rings</button>
                    <button className= {category === "Earrings" ? `border-2 border-yellow-600 text-yellow-600 cursor-pointer w-[150px] h-[42px]` :`bg-slate-200 w-[150px] h-[42px] cursor-pointer shadow-md`} onClick={()=>setcategory("Earrings")}>Earrings</button>
                    <button className= {category === "Necklace" ? `border-2 border-yellow-600 text-yellow-600 cursor-pointer w-[150px] h-[42px]` :`bg-slate-200 w-[150px] h-[42px] cursor-pointer shadow-md`} onClick = {()=>setcategory("Necklace")}>Necklace</button>
                </div>
                <div>
                    {category === "Rings" && <ProductCarousal products={rings}/>}
                    {category === "Earrings" && <ProductCarousal products={earrings}/>}
                    {category === "Necklace" && <ProductCarousal products={necklace}/>}
                </div>

            </div>
        </div>
    )
}