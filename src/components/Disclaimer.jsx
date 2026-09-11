import disclaimer from "../data/disclaimer";
import AppLayout from "./AppLayout";

function Disclaimer() {
   return (
      <AppLayout>
         <section className="pt-6 pb-8 md:max-w-[360px] mx-auto bg-gray-900 min-h-screen w-full px-5 md:max-w-[360px]">
            {disclaimer.map((disc) =>
            (
               <div key={disc.title} className="mb-6">
                  <h4 className="mb-2 text-md font-bold text-white">{disc.title}</h4>
                  <p className="text-sm leading-5 text-gray-400">{disc.content}</p>
                  <p className="text-sm leading-5 text-white">{disc.email}</p>
               </div>
            ))}
         </section>
      </AppLayout>

   )
}

export default Disclaimer