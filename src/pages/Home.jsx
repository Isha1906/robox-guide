import CategoryCard from "../components/CategoryCard"
import records from "../data/cardData";
import AllAds from "../components/AllAds";
function Home() {
  return (
    <div className="mx-auto bg-gray-800 min-h-screen w-full px-5 md:max-w-[360px]">

      <header className="pt-12 pb-16 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          ROBOX
        </h1>
      </header>
      <AllAds />
      
        <div className="flex flex-col gap-8 items-center">
          {records.map((record) => (
            <CategoryCard
              key={record.title}
              title={record.title}
              description={record.description}
              color={record.color}
              path={record.path}
              image={record.image}
            />
          ))}
        </div>
      

    </div>
  );
}

export default Home