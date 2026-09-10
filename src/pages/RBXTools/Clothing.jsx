import { Link } from "react-router-dom"
import { clothes } from "../../data/clothingData"
import AllAds from "../../components/AllAds"
function Clothing() {
    return (
        <div className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
            <header className="mb-10 text-center font-bold text-3xl">CLOTHING</header>
            <AllAds />
            <section className="grid grid-cols-2 items-center gap-5">
                {clothes.map((clothe) => (
                    <div
                        key={clothe.title}
                        className={`${clothe.color} relative h-40 
                        w-full rounded-[30px]`}>
                        <header className="absolute left-1/2 top-3 
                        -translate-x-1/2 whitespace-nowrap font-bold text-white">
                            {clothe.title}
                        </header>

                        <img src={clothe.image} alt={clothe.title}
                            className="absolute bottom-0 left-1/2 h-32 
                            -translate-x-1/2 object-contain"/>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Clothing