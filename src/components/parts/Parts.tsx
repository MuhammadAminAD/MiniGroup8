import React from "react";
import Icon6 from "../../assets/icons/icon6.png";
import Icon7 from "../../assets/icons/icon7.png";
import Icon8 from "../../assets/icons/icon8.png";
import Icon9 from "../../assets/icons/icon9.png";

type PartItem = {
  id: number;
  img: string;
  text: string;
};

const partsData: PartItem[] = [
  { id: 1, img: Icon6, text: "Оплата любым удобным способом" },
  { id: 2, img: Icon7, text: "Большой выбор товаров в каталоге" },
  { id: 3, img: Icon8, text: "Осуществляем быструю доставку" },
  { id: 4, img: Icon9, text: "Делаем скидки на крупные покупки" },
];

const Parts: React.FC = () => {
  return (
    <div className="w-[1280px] m-auto flex items-center justify-between mt-[50px] bg-white text-[#333]">
      {partsData.map((item, index) => (
        <React.Fragment key={item.id}>
          {item.img && <img src={item.img} alt={item.text} className="w-6 h-6 mr-2" />}
          <p className="text-sm">{item.text}</p>
          {index !== partsData.length - 1 && <div className="h-6 w-[1px] bg-gray-300" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Parts;
