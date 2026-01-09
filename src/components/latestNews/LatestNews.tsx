import Img1 from "../../../assets/images/news1.png"
import Img2 from "../../../assets/images/news2.png"
import Img3 from "../../../assets/images/news3.png"
import Img4 from "../../../assets/images/news4.png"

export default function LatestNews() {
  const news = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
  ];

  return (
    <div className="w-[1280px] m-auto py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Последние новости
          </h2>

          <button className="text-sm bg-gray-100 hover:bg-gray-200 text-blue-600 px-5 py-2 rounded-lg transition">
            Больше новостей
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item) => (
            <div key={item.id} className="w-full">
              
              <img
                src={item.img}
                alt="news"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-[17px] font-semibold text-gray-900 leading-6 mb-2">
                Масштабное обновление каталога инструментов
              </h3>

              <p className="text-gray-500 text-sm w-[290px] mb-3">
                С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.
              </p>

              <p className="text-gray-400 text-sm">5 Августа 2023</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}