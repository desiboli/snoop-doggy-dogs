import { useCallback } from "react"
import DogList from "./components/dog-list"
import DogSearch from "./components/dog-search"
import { useSearchParams } from "react-router"

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedBreed = searchParams.get("breed") ?? ""

  const handleBreedChange = useCallback(
    (breed: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev)

        if (breed) {
          newParams.set("breed", breed)
        } else {
          newParams.delete("breed")
        }

        return newParams
      })
    },
    [setSearchParams]
  )

  return (
    <>
      <div className="py-8 px-6">
        <h1 className="text-3xl leading-8 text-center">
          Welcome to the adoption center - Snoop Doggy Dogs
        </h1>

        <div className="mt-8 max-w-7xl mx-auto space-y-8">
          <div className="flex justify-end">
            <DogSearch value={selectedBreed} onChange={handleBreedChange} />
          </div>

          <DogList breed={selectedBreed} />
        </div>
      </div>
    </>
  )
}

export default App
