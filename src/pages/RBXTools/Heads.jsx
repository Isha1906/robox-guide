import { heads } from "../../data/headsData"
import AllAds from "../../components/AllAds"
import BackButton from "../../components/BackButton"
import AppLayout from "../../components/AppLayout"
function Heads() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl">HEADS</header>
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
        </AppLayout>


    )
}
export default Heads