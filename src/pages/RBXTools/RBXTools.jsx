import { tools } from "../../data/toolsData"
import AllAds from "../../components/AllAds"
import { Link } from "react-router-dom"
import AppLayout from "../../components/AppLayout"
function RBXTools() {
    return (
        <AppLayout>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl">ROBOX TOOLS</header>

            <AllAds />

            <section 
            className="grid grid-cols-2 gap-8 items-center">
                {
                    tools.map((tool) =>
                    (
                        <Link to={tool.path}
                        key={tool.title}>
                            <div className="relative" >
                                <img src={tool.image} alt={tool.title}
                                    className="absolute z-10 h-35 left-1/2 -translate-x-1/2"></img>
                                <div

                                    className={`${tool.color} 
                                font-semibold rounded-[30px] 
                                h-45 text-center p-6 pr-12 
                                relative z-0`}>
                                    <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl font-bold text-white">
                                        {tool.title}
                                    </h2>

                                </div>
                            </div>
                        </Link>

                    ))
                }
            </section>
        </AppLayout>



    )
}
export default RBXTools