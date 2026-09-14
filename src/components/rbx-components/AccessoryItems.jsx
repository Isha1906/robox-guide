import { accessoryItems } from "../../data/accessoriesData";
import { useParams } from "react-router-dom";
import AppLayout from "../AppLayout";
import ItemsCard from "../ItemsCard";
function AccessoryItems()
{
    const { accessory } = useParams();
    const items = accessoryItems[ accessory ] || [];
    return (
        <AppLayout>
            <section className="justify-items-center grid grid-cols-2 gap-5">
                {items.map((item) => (
                    <ItemsCard key={item.title} 
                    item={item} />
                ))}
            </section>
        </AppLayout>

    );
}

export default AccessoryItems