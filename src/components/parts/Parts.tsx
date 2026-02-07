import React from "react";
import { IconType } from "react-icons";
import { CiBoxList } from "react-icons/ci";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbCirclePercentage, TbCreditCard } from "react-icons/tb";

type PartItem = {
  id: number;
  Icon: IconType;
  text: string;
};

const partsData: PartItem[] = [
  {
    id: 1,
    Icon: TbCreditCard,
    text: "Оплата любым удобным способом",
  },
  {
    id: 2,
    Icon: CiBoxList,
    text: "Большой выбор товаров в каталоге",
  },
  {
    id: 3,
    Icon: GiCardboardBoxClosed,
    text: "Осуществляем быструю доставку",
  },
  {
    id: 4,
    Icon: TbCirclePercentage,
    text: "Делаем скидки на крупные покупки",
  },
];

const Parts: React.FC = () => {
  return (
    <div className="w-[1280px] m-auto flex items-center justify-between mt-[50px] bg-white text-[#333]">
      {partsData.map(({ id, Icon, text }, index) => (
        <React.Fragment key={id}>
          <div className="flex items-center gap-2">
            <Icon className="text-blue-500 text-2xl" />
            <p className="text-sm">{text}</p>
          </div>

          {index !== partsData.length - 1 && (
            <div className="h-6 w-[1px] bg-gray-300" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Parts;
