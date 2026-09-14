import AppLayout from "../AppLayout";
import { rbxPremium } from "../../data/freerbxData";
import AllAds from "../AllAds";
import FreeRBXCard from "./FreeRBXCard";
function FreeRBXPremium()
{
    return (
        <AppLayout>

            <header className="sticky top-0 z-50 bg-gray-900/80 
            backdrop-blur-md mb-10 text-center font-bold text-3xl 
            p-5 text-center font-bold text-3xl">
            RBX PREMIUM
            </header>

            <AllAds />

            {
                rbxPremium.map((item)=>
                (
                  
                    <FreeRBXCard 
                        key={item.title}
                        item={item}
                    />
                  
                ))
            }

        </AppLayout>
    );
}

export default FreeRBXPremium