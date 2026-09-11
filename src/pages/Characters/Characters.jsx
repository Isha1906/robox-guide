import AllAds from "../../components/AllAds";
import BackButton from "../../components/BackButton";
import { charAvatar } from "../../data/toolsData";
import AppLayout from "../../components/AppLayout";

function Characters() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl p-5 text-center font-bold text-3xl">Characters</header>
            <AllAds />
            <section className="flex flex-col gap-20 items-center">
                {charAvatar.map((char) => (
                    <div className={`${char.color} relative
                                font-semibold rounded-[30px]
                                h-25 w-70 text-center p-6 pr-15 
                                relative z-0`} key={char.title}>
                        <img src={char.image}
                            alt={char.title}
                            className="absolute bottom-0 z-10 right-6 h-36 object-contain"></img>
                        <h2 className="absolute left-5 top-1/2 
                            -translate-y-1/2 text-lg font-bold text-white">
                            {char.title}
                        </h2>
                    </div>

                ))}
            </section>
        </AppLayout>

    )
}
export default Characters