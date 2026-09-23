import AllAds from "../../components/AllAds"
import AppLayout from "../../components/AppLayout"
import { Link } from "react-router-dom"

import { freeRBX } from "../../data/toolsData"
function Success() {
    return (
        <AppLayout>
            <header className="text-3xl font-bold text-center">
                SUCCESS
            </header>
            <AllAds />
            <section className="mt-40 text-center">
                <Link
                    to="/"
                    className="block rounded-lg bg-purple-500 py-3 font-bold text-white">
                    Home
                </Link>
            </section>
            <section className="mt-15 flex flex-col items-center gap-20">
                {freeRBX
                    .filter((free) => free.title === "FREE RBX")
                    .map((free) => (
                        <Link to={`/free-rbx/${free.slug}`}>
                            <div key={free.title} className={`relative ${free.color} h-35 w-65 rounded-[30px]`}>
                                <h2 className={`absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-white px-7 py-2 ${free.color} font-bold`}>{free.title}</h2>
                                <p className="flex h-full items-center px-8 font-semibold md:text-xl sm:text-2xl w-55">{free.description}</p>
                                <img src={free.image} alt={free.title}
                                className="absolute z-10 h-25 left-[62%] -translate-x-[10%] bottom-6 " />
                            </div>
                        </Link>

                    ))}
            </section>
        </AppLayout>

    )
}

export default Success