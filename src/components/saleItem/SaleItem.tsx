import FirstBG from '../../assets/Images/background1.png';
import SecondBG from '../../assets/Images/background2.png';
import ThirdBG from '../../assets/Images/background3.png';
import FourthBG from '../../assets/Images/background4.png'; 

interface SaleItem {
  img: string;
  title: string;
  discount: string;
}

const saleData: SaleItem[] = [
  {
    img: FirstBG,
    title: "Метизные изделия",
    discount: "до -15%",
  },
  {
    img: SecondBG,
    title: "Лакокрасочные материалы",
    discount: "до -30%",
  },
  {
    img: ThirdBG,
    title: "Напольные покрытия",
    discount: "до -25%",
  },
  {
    img: FourthBG,
    title: "Все для отопления",
    discount: "до -30%",
  },
];

export default function SaleCards() {
  return (
    <div className="w-[1280px] m-auto flex gap-4 overflow-x-auto py-3">
      {saleData.map((item, index) => (
        <div
          key={index}
          className="
            relative w-[390px] h-36 mt-10 rounded-xl overflow-hidden cursor-pointer
            shadow hover:shadow-lg transition bg-cover bg-center
          "
          style={{
            backgroundImage: `url(${item.img})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>

          <div className=" w-[140px] ml-[30px] flex flex-col h-[80px]">
            <p className="text-black mt-[25px] font-medium drop-shadow">{item.title}</p>

            <span className="mt-[7px] bg-black/70 text-white text-xs px-2 py-1 rounded-md w-fit">
              {item.discount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
