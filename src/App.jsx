import CategoryCard from "./components/CategoryCard";
import records from "./data/cardData";
function App() {
  return (
    <main className="min-h-screen bg-black text-white ">

      <div className="mx-auto bg-gray-800 min-h-screen w-full px-5">

        <header className="pt-12 pb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ROBOX
          </h1>
        </header>
        <section className="flex flex-col items-center justify-center text-[10px] font-semibold h-[100px] tracking-widest">
          <h5>ADVERTISEMENT</h5>
          <div>
            {/* Ad will appear here */}
            Ad will appear here
          </div>
        </section>
        <section className="">
          <div className="grid grid-cols-1 gap-8">
            {records.map((record) =>
            (
              <CategoryCard
                key={record.title}
                title={record.title}
                description={record.description}
                color={record.color}
              />
            ))}
          </div>
        </section>
      </div>

    </main>
  )
}

export default App