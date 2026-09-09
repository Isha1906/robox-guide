import { Link } from "react-router-dom";

function CategoryCard(props) {
    return (
        <Link to={props.path}>
            <div className={`relative h-40 w-70 rounded-[28px] ${props.color}`}>
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-white px-7 py-2 ${props.color}`}>
                    <h2 className="whitespace-nowrap text-xl font-bold">
                        {props.title}
                    </h2>
                </div>
                <img src={props.image}
                    className="absolute z-10 h-20 left-[65%] -translate-x-[10%] top-6 "></img>
                <p className="flex h-full items-center px-8 font-semibold md:text-xl sm:text-2xl w-55">
                    {props.description}
                </p>
            </div>
        </Link>
    );
    // if (props.title === "RBX TOOLS") {
    //     return (
    //         <Link to="rb">{CategoryCard}</Link>
    //     );
    // }
    // return CategoryCard;
}

export default CategoryCard