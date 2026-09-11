import AppLayout from "./AppLayout";

function ClothingCard({ item }) {
    return (
      
            <div className="h-36 w-36 aspect-square rounded-[16px] bg-white p-3">

                <div className="h-full rounded-[12px] border-2 border-blue-900 bg-blue-100">

                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-25 w-full object-contain"
                    />

                    <h2 className="line-clamp-2 px-1 pb-2 text-center text-xs font-bold text-black">
                        {item.title}
                    </h2>

                </div>

            </div>
       

    );
}

export default ClothingCard;