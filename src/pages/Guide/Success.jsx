import AllAds from "../../components/AllAds"
import AppLayout from "../../components/AppLayout"
import { Link } from "react-router-dom"
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
            
        </AppLayout>

    )
}

export default Success