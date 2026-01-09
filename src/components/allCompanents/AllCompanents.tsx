import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Parts from "@/components/parts/Parts"
import SaleCards from "@/components/saleItem/SaleItem"
import CategoryList from "../categoryList/CategoryList"
import HitsSection from "../hitsSection/HitsSection"
import PopularBrands from "../popularBrands/PopularBrands"
import BestOffers from "../bestOffers/BestOffers"
import LatestNews from "../latestNews/LatestNews"
import AboutSection from "../aboutSection/AboutSection"


function AllComponenets() {
  return (
    <div>
      <Header />
      <Parts />
      <CategoryList />
      <SaleCards />
      <HitsSection />
      <PopularBrands />
      <BestOffers />
      <AboutSection />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default AllComponenets