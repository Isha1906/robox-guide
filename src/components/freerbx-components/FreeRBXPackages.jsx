import AppLayout from "../../components/AppLayout";
import AllAds from "../../components/AllAds";
import FreeRBXCard from "../freerbx-components/FreeRBXCard";
import { freeRbxPackages } from "../../data/freerbxData";

function FreeRBXPackages() {

    return (
        <AppLayout>

            <header className="sticky top-0 z-50 bg-gray-900/80 
            backdrop-blur-md mb-10 text-center font-bold text-3xl 
            p-5 text-center font-bold text-3xl">
            RBX PACKAGE
            </header>

            <AllAds />

            {
                freeRbxPackages.map((item)=>
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

export default FreeRBXPackages;