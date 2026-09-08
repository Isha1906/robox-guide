function CategoryCard(props) {
    return (
        <div className={`relative h-40 rounded-[28px] border-2 border-white ${props.color}`}>
            <div className={`absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-white px-7 py-2 ${props.color}`}>
                <h2 className="whitespace-nowrap text-xl font-bold">
                    {props.title}
                </h2>
            </div>
            <p className="flex h-full items-center px-8 font-bold sm:text-2xl">
                {props.description}
            </p>
        </div>
    )
}

export default CategoryCard