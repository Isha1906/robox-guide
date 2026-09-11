import { clothingItems } from "../data/clothingData";
import ClothingCard from "./ClothingCard";
import { useParams } from "react-router-dom";
import AppLayout from "./AppLayout";

function ClothingItems() {
    const { category } = useParams();
    const items = clothingItems[category] || [];
    return (
        <AppLayout>
            <section className="grid grid-cols-2 gap-5">
                {items.map((item) => (
                    <ClothingCard key={item.title} item={item} />
                ))}
            </section>
        </AppLayout>

    );
}

export default ClothingItems;