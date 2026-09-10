import { heads } from "../../data/headsData"
import AllAds from "../../components/AllAds"
function Heads() {
    return (
        <div className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
            <header className="mb-10 text-center font-bold text-3xl">CLOTHING</header>
            <AllAds />
            <section className="grid grid-cols-2 items-center gap-5">
                {heads.map((head) => (
                    <div
                        key={head.title}
                        className={`${head.color} relative h-40 
                        w-full rounded-[30px]`}>
                        <header className="absolute left-1/2 top-3 
                        -translate-x-1/2 whitespace-nowrap text-xl font-bold text-white">
                            {head.title}
                        </header>

                        <img src={head.image} alt={head.title}
                            className="absolute bottom-1 left-1/2 h-30
                            -translate-x-1/2 object-contain"/>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default Heads