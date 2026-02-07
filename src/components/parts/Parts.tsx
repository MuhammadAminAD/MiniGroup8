import React from "react";

type PartItem = {
  id: number;
  text: string;
};

const partsData: PartItem[] = [
  { id: 1, text: "Оплата любым удобным способом" },
  { id: 2, text: "Большой выбор товаров в каталоге" },
  { id: 3, text: "Осуществляем быструю доставку" },
  { id: 4, text: "Делаем скидки на крупные покупки" },
];

const Parts: React.FC = () => {
  return (
    <div className="w-[1280px] m-auto flex items-center justify-between mt-[50px] bg-white text-[#333]">
      {partsData.map((item, index) => (
        <React.Fragment key={item.id}>
          <p className="text-sm">{item.text}</p>

          {index !== partsData.length - 1 && (
            <div className="h-6 w-[1px] bg-gray-300" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Parts;
