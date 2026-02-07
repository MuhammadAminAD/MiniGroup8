import Header from "@/components/header/Header"
import Parts from "@/components/parts/Parts"
import CategoryItem from "@/components/categoryItem/CategoryItem"
import SaleItem from "@/components/saleItem/SaleItem"
import Footer from "@/components/footer/Footer"
import HitsSection from "@/components/hitsSection/HitsSection"
import PopularBrands from "@/components/popularBrands/PopularBrands"
import BestOffers from "@/components/bestOffers/BestOffers"
import AboutSection from "@/components/aboutSection/AboutSection"
import LatestNews from "@/components/latestNews/LatestNews"


function AllComponenets() {
  return (
    <div>
      <Header />
      <Parts />
      <CategoryItem />
      <SaleItem />
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
