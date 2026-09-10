import AllAds from "../../components/AllAds"
import { animation } from "../../data/animationData"

function Animation() {
    return (
        <div className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
            <header className="text-center font-bold text-2xl">ANIMATION</header>
            <AllAds />
            {animation.map((anim) =>
            (
                <section key={anim.title} className="flex flex-col mb-10 items-center">
                    <div className={`${anim.color} h-38 w-70 rounded-[30px]`}>
                        <header className="text-center text-lg font-semibold text-white">
                        {anim.title}
                        </header>
                        <img src={anim.image} 
                            className="mx-auto h-30 object-contain"/>

                    </div>
                </section>
            ))}
        </div>
    )
}
export default Animation