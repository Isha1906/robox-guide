import { freeRBX } from "../../data/toolsData"
import AllAds from "../../components/AllAds"
function FreeRBX()
{
    return(
        <div className="mx-auto min-h-screen w-full bg-gray-800 px-5 md:max-w-[360px]">
            <header className="text-center font-bold text-3xl">FREE RBX</header>
            <AllAds />
            <section className="mt-6 flex flex-col items-center gap-20">
                {freeRBX.map((free)=>
                (
                    <div key={free.title} className={`relative ${free.color} h-35 w-full rounded-[30px]`}>
                    <h2 className={`absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-white px-7 py-2 ${free.color} font-bold`}>{free.title}</h2>
                    <p className="flex h-full items-center px-8 font-semibold md:text-xl sm:text-2xl w-55">{free.description}</p>
                    <img src={free.image} alt={free.title} 
                        
                    className="absolute z-10 h-35 left-[70%] -translate-x-[10%] bottom-0 "
                    />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default FreeRBX