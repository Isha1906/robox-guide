import { maps } from "../../data/toolsData";
import AllAds from "../../components/AllAds";
import BackButton from "../../components/BackButton";
import AppLayout from "../../components/AppLayout";

function Maps() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl p-5 text-center font-bold text-3xl">
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
        </AppLayout>
    );
}

export default Maps;