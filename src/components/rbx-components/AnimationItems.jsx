import AppLayout from "../AppLayout";
import ItemsCard from "../ItemsCard";
import { useParams } from "react-router-dom";
import { animationItems } from "../../data/animationData";
function AnimationItems()
{
    const { animation } = useParams();
    const items = animationItems[ animation ] || [];
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

export default AnimationItems