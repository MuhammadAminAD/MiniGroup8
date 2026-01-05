import Header from "@/components/header/Header"
import Parts from "@/components/parts/Parts"
import CategoryItem from "@/components/categoryItem/CategoryItem"
import SaleItem from "@/components/saleItem/SaleItem"
import HitsSection from "@/components/main/hitsSection/HitsSection"
import PopularBrands from "@/components/main/popularBrands/PopularBrands"
import BestOffers from "@/components/main/bestOffers/BestOffers"
import AboutSection from "@/components/main/aboutSection/AboutSection"
import LatestNews from "@/components/main/latestNews/LatestNews"
import Footer from "@/components/footer/Footer"


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
