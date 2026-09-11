import AppLayout from "./AppLayout";

function ClothingCard({ item }) {
    return (
      
            <div className="h-40 w-40 aspect-square rounded-[16px] bg-white p-3">

                <div className="h-full rounded-[12px] border-2 border-blue-900 bg-blue-100">

                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-full object-contain mt-2"
                    />

                    <h2 className="m-3 text-center text-[10px] font-bold text-black">
                        {item.title}
                    </h2>

                </div>

            </div>
       

    );
}

export default ClothingCard;