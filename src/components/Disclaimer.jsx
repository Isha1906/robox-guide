import disclaimer from "../data/disclaimer";

function Disclaimer()
{
    return(
       <section className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-800 min-h-screen w-full px-5 md:max-w-[360px]">
        {disclaimer.map((disc)=>
        (
           <div key={disc.title} className="mb-6">
           <h4 className="mb-2 text-sm font-bold text-white">{disc.title}</h4>
           <p className="text-xs leading-5 text-gray-400">{disc.content}</p>
           <p className="text-xs leading-5 text-gray-400">{disc.email}</p>
           </div> 
        ))}
       </section>
    )
}

export default Disclaimer