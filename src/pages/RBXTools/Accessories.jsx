import AllAds from "../../components/AllAds"
import BackButton from "../../components/BackButton"
import { accessories } from "../../data/accessoriesData"
function Accessories()
{
    return(
        <div className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
           <BackButton />
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 p-5 text-center font-bold text-3xl mb-10 text-center font-bold text-3xl">ACCESSORIES</header>
            <AllAds />
            <section className="grid grid-cols-2 items-center gap-6">
            {accessories.map((access)=>
            (
                <div key={access.title}
                className={`${access.color} relative h-40 
                        w-full rounded-[30px]`}>
                <header className="text-center text-white text-xl font-semibold">{access.title}</header>
                <img src={access.image} className="absolute bottom-1 left-1/2 h-30
                            -translate-x-1/2 object-contain"/>

                </div>
            ))}
            </section>
        </div>
    )
}

export default Accessories