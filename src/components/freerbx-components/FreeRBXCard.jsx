import { Link } from "react-router-dom";
import { freeRbxPackages, rbxPremium } from "../../data/freerbxData";

function FreeRBXCard({ item }) {
    const path =rbxPremium.includes(item)?"/guide/level":"/guide";
    return (
        <Link to={path}>
            <div className="flex mb-6 h-25 w-full items-center 
            justify-between rounded-2xl bg-white px-4 border-2 border-yellow-800">

                <div className="flex items-center gap-3">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-10 w-10 object-contain"/>

                    <h2 className="text-sm font-bold text-black">
                        {item.title}
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-2 font-bold text-black">
                    <span className="text-sm">How to Get</span>
                    <span className="flex h-full w-6 items-center 
                    justify-center rounded-full bg-black text-white 
                    border-2 border-yellow-600">
                     →
                    </span>
                </div>

            </div>
        </Link>
    );
}

export default FreeRBXCard;