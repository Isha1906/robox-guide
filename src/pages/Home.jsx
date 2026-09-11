import CategoryCard from "../components/CategoryCard"
import records from "../data/cardData";
import AllAds from "../components/AllAds";
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout"
function Home() {
  return (
    <AppLayout showBack={false}>
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md mb-10 text-center font-bold text-3xl pt-10 pb-10 text-center text-white">
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
        <footer className="text-center font-bold text-md underline">
          <Link to="/disclaimer">
            DISCLAIMER
          </Link>
        </footer>
    </AppLayout>

  );
}

export default Home