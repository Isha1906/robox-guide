import { Link } from "react-router-dom";

function CategoryCard(props) {
    return (
        <Link to={props.path}>
            <div className={`relative h-28 w-70 m-5 rounded-[28px] ${props.color}`}>
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-white px-7 py-2 ${props.color}`}>
                    <h2 className="whitespace-nowrap text-xl font-bold">
                        {props.title}
                    </h2>
                </div>
                <img src={props.image}
                    className="absolute z-10 h-35 left-[70%] -translate-x-[10%] bottom-0 "></img>
                <p className="flex h-full items-center px-8 font-semibold md:text-xl sm:text-2xl w-55">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}

export default CategoryCard