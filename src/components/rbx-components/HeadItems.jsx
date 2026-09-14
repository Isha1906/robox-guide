import { headItems } from "../../data/headsData";
import ItemsCard from "../ItemsCard";
import { useParams } from "react-router-dom";
import AppLayout from "../AppLayout";

function HeadItems() {
    const { head } = useParams();
    const items = headItems[ head ] || [];
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

export default HeadItems;