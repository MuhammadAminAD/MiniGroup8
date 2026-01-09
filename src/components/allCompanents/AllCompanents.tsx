
import HitsSection from "../hitsSection/HitsSection"
import PopularBrands from "../popularBrands/PopularBrands"
import BestOffers from "../bestOffers/BestOffers"
import LatestNews from "../latestNews/LatestNews"
import AboutSection from "../aboutSection/AboutSection"
import Footer from "../footer/Footer"
import SaleCards from "../saleItem/SaleItem"
import CategoryList from "../categoryItem/CategoryItem"
import Parts from "../parts/Parts"
import Header from "../header/Header"


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