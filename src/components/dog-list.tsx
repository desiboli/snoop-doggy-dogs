import { useFetchDogsByBreedQuery, useFetchDogsQuery } from "@/store/dogs"
import DogCard from "./dog-card"
import { useState } from "react"
import { Button } from "./ui/button"
import { MoveDownIcon } from "lucide-react"

interface DogListProps {
  breed: string
}

const DogList = ({ breed }: DogListProps) => {
  const [visibleCount, setVisibleCount] = useState(6)

  const {
    data: dogs,
    isLoading,
    isError,
  } = useFetchDogsQuery(100, {
    skip: breed !== "",
  })
  const {
    data: dogsByBreed,
    isLoading: isLoadingByBreed,
    isError: isErrorByBreed,
  } = useFetchDogsByBreedQuery(
    {
      breed,
      count: 100,
    },
    {
      skip: breed === "",
    }
  )

  if (isLoading || isLoadingByBreed) return <div>Loading dogs...</div>
  if (isError || isErrorByBreed) return <div>Error loading dogs</div>

  const allDogs = breed === "" ? dogs : dogsByBreed
  const displayedDogs = allDogs?.slice(0, visibleCount)
  const hasMore = allDogs ? visibleCount < allDogs.length : false

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedDogs?.map((dog, index) => (
          <DogCard
            key={index}
            name={dog.name}
            photo={dog.photo}
            breed={dog.breed}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
            Show more
            <MoveDownIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default DogList
