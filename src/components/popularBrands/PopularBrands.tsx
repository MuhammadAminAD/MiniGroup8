import FirstBrand from '../../assets/Images/brand1.png';
import SecondBrand from '../../assets/Images/brand2.png';
import ThirdBrand from '../../assets/Images/brand3.png';
import FourthBrand from '../../assets/Images/brand4.png';
import FifthBrand from '../../assets/Images/brand5.png';
import SixthBrand from '../../assets/Images/brand6.png';
import SeventhBrand from '../../assets/Images/brand7.png';

const brands = [
  { id: 1, img: FirstBrand },
  { id: 2, img: SecondBrand },
  { id: 3, img: ThirdBrand },
  { id: 4, img: FourthBrand},
  { id: 5, img: FifthBrand },
  { id: 6, img: SixthBrand },
  { id: 7, img: SeventhBrand },
];

const PopularBrands = () => {
  return (
    <section className="w-full h-[200px] mt-[90px] pl-[130px] bg-gray-50">
      <h2 className="text-xl font-semibold pt-[40px]">Популярные бренды</h2>

      <div className="relative mt-[30px] flex items-center">
        <div className="w-[1280px] flex justify-between scrollbar-hide">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="min-w-[150px] h-14 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition"
            >
              <img
                src={brand.img}
                alt="brand"
                className="h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;