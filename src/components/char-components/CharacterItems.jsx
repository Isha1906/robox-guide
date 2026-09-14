import AppLayout from "../AppLayout";
import ItemsCard from "../ItemsCard";
import { useParams } from "react-router-dom";
import { avatars, characters } from "../../data/characterData";
function CharacterItems() {
    const { character } = useParams();
    const items = character === "avatars" ? avatars : characters;
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

export default CharacterItems