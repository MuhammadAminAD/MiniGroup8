import { RxCaretRight } from "react-icons/rx";
import FirstImage from "../../assets/Images/image1.png";

const Header: React.FC = () => {
  return (
    <div
      className="relative w-[1280px] h-[506px] m-auto mt-10 rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${FirstImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-10 w-[420px] text-white">
        <h1 className="text-4xl text-black font-bold leading-tight">
          Электроинструмент <br /> для любых нужд
        </h1>

        <p className="mt-4 text-sm text-black opacity-90">
          У нас обновился ассортимент сантехники, мебели для ванной комнаты, а также других сопутствующих товаров.
        </p>

        <button className="mt-6 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium">
          перейти к товарам <RxCaretRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
