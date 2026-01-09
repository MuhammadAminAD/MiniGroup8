import BgImage from "../../assets/images/background5.png"

export default function AboutSection() {
    return (
        <div
            className="w-[1520px] h-[500px] mt-[90px] bg-right bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="max-w-7xl mx-auto ">

                <div className="w-full md:w-[55%]">

                    <h2 className="text-[28px] pt-[40px] font-semibold text-gray-900">
                        О нашем магазине
                    </h2>

                    <p className="text-gray text-[14px] pt-[15px] w-[660px]">
                        Цель и главная задача компании – создать сервис, который не ограничится продажей
                        строительных и отделочных материалов, а будет решать задачи и трудности, с которыми
                        сталкиваются люди во время ремонта.
                    </p>

                    <div className="grid w-[650px] grid-cols-4 pt-[25px] gap-y-8 gap-x-10">
                        <div>
                            <h3 className="text-[22px] font-bold text-blue-600">17 805,3 м²</h3>
                            <p className="text-gray text-[10px] text-sm mt-1">торговых и складских помещений</p>
                        </div>

                        <div>
                            <h3 className="text-[22px] font-bold text-blue-600">50 000+</h3>
                            <p className="text-gray text-[10px] text-sm mt-1">наименований товара</p>
                        </div>

                        <div>
                            <h3 className="text-[22px] font-bold text-blue-600">2 500+</h3>
                            <p className="text-gray text-[10px] text-sm mt-1">постоянных клиентов</p>
                        </div>

                        <div>
                            <h3 className="text-[22px] font-bold text-blue-600">440</h3>
                            <p className="text-gray text-[10px] text-sm mt-1">опытных сотрудников</p>
                        </div>
                    </div>

                    <p className="text-gray text-[13px] pt-[25px] mb-8 w-[660px]">
                        Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом,
                        комфортабельном доме, благоустроенном современном офисе, уютной теплой даче,
                        помочь реализовать любые строительные и дизайнерские фантазии и с минимальными
                        затратами времени и денежных средств.
                    </p>

                    <button className="bg-gray-900 mt-[20px] hover:bg-black text-white px-6 py-3 rounded-lg text-sm transition flex items-center gap-2">
                        ПОДРОБНЕЕ О КОМПАНИИ
                        <span className="text-lg">›</span>
                    </button>

                </div>

            </div>
        </div>
    )
}