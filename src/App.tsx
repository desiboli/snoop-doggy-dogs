import DogList from "./components/dog-list"
import DogSearch from "./components/dog-search"

function App() {
  return (
    <>
      <div className="py-8 px-6">
        <h1 className="text-3xl leading-8 text-center">
          Welcome to the adoption center - Snoop Doggy Dogs
        </h1>

        <div className="mt-8 max-w-7xl mx-auto space-y-8">
          <div className="flex justify-end">
            <DogSearch />
          </div>

          <DogList />
        </div>
      </div>
    </>
  )
}

export default App
