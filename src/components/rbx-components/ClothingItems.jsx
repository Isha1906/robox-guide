import { clothingItems } from "../../data/clothingData";
import ItemsCard from "../ItemsCard";
import { useParams } from "react-router-dom";
import AppLayout from "../AppLayout";

function ClothingItems() {
    const { category } = useParams();
    const items = clothingItems[category] || [];
    return (
        <AppLayout>
            <section className="justify-items-center grid grid-cols-2 gap-5">
                {items.map((item) => (
                    <ItemsCard key={item.title} item={item} />
                ))}
            </section>
        </AppLayout>

    );
}

export default ClothingItems;