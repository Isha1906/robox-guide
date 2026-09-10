import { maps } from "../../data/toolsData";
import AllAds from "../../components/AllAds";

function Maps() {
    return (
        <div className="mx-auto min-h-screen w-full bg-gray-800 px-5 md:max-w-[360px]">

            <header className="text-center text-3xl font-bold">
                MAPS
            </header>

            <AllAds />

            <section className="mt-6 flex flex-col items-center gap-5">

                {maps.map((item) => (
                    <div
                        key={item.title}
                        className="w-full rounded-2xl bg-white p-4"
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-60 w-full rounded-xl object-cover"
                        />

                        <div className="mt-3 flex items-center justify-between">

                            <h2 className="text-base font-bold text-black">
                                {item.title}
                            </h2>

                            <div className="flex h-7 w-13 items-center justify-center rounded-full bg-black text-sm text-white">
                                open
                            </div>

                        </div>

                    </div>
                ))}

            </section>

        </div>
    );
}

export default Maps;