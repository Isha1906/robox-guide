import { Link } from "react-router-dom"
import { clothes } from "../../data/clothingData"
import AllAds from "../../components/AllAds"
import BackButton from "../../components/BackButton"
import AppLayout from "../../components/AppLayout"
function Clothing() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 p-5 text-center font-bold text-3xl mb-10 text-center font-bold text-3xl">CLOTHING</header>
            <AllAds />
            <section className="grid grid-cols-2 items-center gap-5">
                {clothes.map((clothe) => (
                    <Link
                        key={clothe.title}
                        to={`/rbx-tools/clothing/${clothe.slug}`}
                        className={`${clothe.color} relative h-40 
                        w-full rounded-[30px]`}>
                        <header className="absolute left-1/2 top-3 
                        -translate-x-1/2 whitespace-nowrap text-xl font-bold text-white">
                            {clothe.title}
                        </header>

                        <img src={clothe.image} alt={clothe.title}
                            className="absolute bottom-0 left-1/2 h-32 
                            -translate-x-1/2 object-contain"/>
                    </Link>
                ))}
            </section>
        </AppLayout>
    )
}

export default Clothing