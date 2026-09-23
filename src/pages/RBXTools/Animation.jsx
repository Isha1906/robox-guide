import { Link } from "react-router-dom"
import AllAds from "../../components/AllAds"
import BackButton from "../../components/BackButton"
import { animation } from "../../data/animationData"

function Animation() {
    return (
        <div className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
            <BackButton />
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl p-5 text-center font-bold text-2xl">ANIMATION</header>
            <AllAds />
            <section className="flex flex-col mb-10 items-center gap-8">
                {animation.map((anim) =>
                (
                    <Link to={`/rbx-tools/animations/${anim.slug}`}>
                        <div className={`relative ${anim.color} h-38 w-70 rounded-[30px]`}>
                            <header className=" text-center text-xl font-semibold text-white">
                                {anim.title}
                            </header>
                            <img src={anim.image}
                                className={`absolute left-1/2
                            -translate-x-1/2 object-contain ${anim.h}`} />
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    )
}
export default Animation