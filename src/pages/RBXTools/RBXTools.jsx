import { tools } from "../../data/toolsData"
function RBXTools() {
    return (
        <div className="mx-auto bg-gray-800 min-h-screen w-full px-5 md:max-w-[360px]">
            <header className="text-center font-bold text-3xl">ROBOX Tools</header>
            <section className="flex flex-col items-center justify-center text-[10px] font-semibold h-[100px] tracking-widest">
                <h5>ADVERTISEMENT</h5>
                <div>
                    {/* Ad will appear here */}
                    Ad will appear here
                </div>
            </section>
            <section className="grid grid-cols-2 gap-8">
                {
                    tools.map((tool) =>
                    (
                        <div className="relative select-all">
                            <img src={tool.image} alt={tool.title}
                                className="absolute z-10 h-40 left-1/2 -translate-x-1/2 -top-6 "></img>
                            <div
                                key={tool.title}
                                className={`${tool.color} 
                                font-semibold rounded-[30px] 
                                h-45 text-center p-6 pr-12 
                                relative z-0`}>
                                <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xl font-bold text-white">
                                    {tool.title}
                                </h2>

                            </div>
                        </div>

                    ))
                }
            </section>
        </div>
    )
}
export default RBXTools