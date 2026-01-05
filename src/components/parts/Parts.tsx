import { CiBoxList } from "react-icons/ci";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbCirclePercentage, TbCreditCard } from "react-icons/tb";

function Parts() {
  return (
    <div className="w-[1280px] m-auto flex items-center justify-between mt-[50px] bg-white text-[#333]">

      <div className="flex items-center gap-2">
        <TbCreditCard className="text-blue-500 text-2xl" />
        <p className="text-sm">Оплата любым удобным способом</p>
      </div>

      <div className="h-6 w-[1px] bg-gray-300" />

      <div className="flex items-center gap-2">
        <CiBoxList className="text-blue-500 text-2xl" />
        <p className="text-sm">Большой выбор товаров в каталоге</p>
      </div>

      <div className="h-6 w-[1px] bg-gray-300" />

      <div className="flex items-center gap-2">
        <GiCardboardBoxClosed className="text-blue-500 text-2xl" />
        <p className="text-sm">Осуществляем быструю доставку</p>
      </div>

      <div className="h-6 w-[1px] bg-gray-300" />

      <div className="flex items-center gap-2">
        <TbCirclePercentage className="text-blue-500 text-2xl" />
        <p className="text-sm">Делаем скидки на крупные покупки</p>
      </div>

    </div>
  );
}

export default Parts;
