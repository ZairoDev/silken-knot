import { CategoryCarousal } from "@/modules/home/ui/components/homePageComponents/category-carousal"
import { HeroSection } from "@/modules/home/ui/components/homePageComponents/hero-section"
import { LastSection } from "@/modules/home/ui/components/homePageComponents/last-section"
import { NewCollection } from "@/modules/home/ui/components/homePageComponents/new-collection"
import { TopProducts } from "@/modules/home/ui/components/homePageComponents/top-products"
import { TwoProduct } from "@/modules/home/ui/components/homePageComponents/two-product"

export const HomePageView = ()=>{
    return(
        <div>  
        <HeroSection/>
        <CategoryCarousal/>
        <NewCollection/>
        <TopProducts/>
        <TwoProduct/>
        {/* <LastSection/> */}
        </div>
    )
}