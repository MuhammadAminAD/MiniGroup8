import SecondImage from '../../assets/Images/image2.png'
import ThirdImage from '../../assets/Images/image3.png'
import FourthImage from '../../assets/Images/image4.png'
import FifthImage from '../../assets/Images/image5.png'
import SixthImage from '../../assets/Images/image6.png'
import SeventhImage from '../../assets/Images/image7.png'
import EighthImage from '../../assets/Images/image8.png'

interface CategoryItem {
  img: string;
  title: string;
}

const categories: CategoryItem[] = [
  { img: SecondImage, title: "Сантехника" },
  { img: ThirdImage, title: "Отделочные материалы" },
  { img: FourthImage, title: "Электротовары" },
  { img: FifthImage, title: "Инструменты" },
  { img: SixthImage, title: "Столярные изделия" },
  { img: SeventhImage, title: "Общестроительные материалы" },
  { img: EighthImage, title: "Все для сауны и бани" },
];

function CategoryList() {
  return (
    <div className="w-[1280px] m-auto flex items-center gap-4 overflow-x-auto mt-[51px]">

      {categories.map((item, index) => (
        <div
          key={index}
          className="w-40 h-44 bg-white shadow-sm rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition"
        >
          <img src={item.img} alt={item.title} className="h-16 object-contain" />
          <p className="text-sm text-center mt-3">{item.title}</p>
        </div>
      ))}

      <div className="w-35 h-44 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-md transition">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
          ➜
        </div>
        <p className="text-sm text-center">Перейти в каталог</p>
      </div>
    </div>
  );
}

export default CategoryList;
