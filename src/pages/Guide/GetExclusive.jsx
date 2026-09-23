import AppLayout from "../../components/AppLayout";
import AllAds from "../../components/AllAds";
import { Link } from "react-router-dom";

function GetExclusive() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl p-5 text-center font-bold text-3xl">
                GET EXCLUSIVE ITEMS
            </header>
            <AllAds />
            <section className="mt-10 rounded-2xl bg-gray-800 p-6 text-center shadow-blue-300">
                <h1 className="text-2xl font-bold text-white">
                    Claim Your Exclusive Item
                </h1>
                <p className="mt-2 text-sm text-white">
                    Get your limited Roblox Reward instantly.
                </p>
                <div >
                    <Link to="/guide/level"
                    className="flex rounded-[5px] h-9 mt-6 p-1 font-bold text-black bg-white
                transition-shadow duration-200 hover:shadow-lg shadow-blue-300 justify-center
                text-lg">
                        Get it for FREE
                    </Link>
                </div>

            </section>
        </AppLayout>
    )
}

export default GetExclusive