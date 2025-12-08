import { useFetchDogsByBreedQuery, useFetchDogsQuery } from "@/store/dogs"
import DogCard from "./dog-card"

interface DogListProps {
  breed: string
}

const DogList = ({ breed }: DogListProps) => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {allDogs?.map((dog, index) => (
        <DogCard
          key={index}
          name={dog.name}
          photo={dog.photo}
          breed={dog.breed}
        />
      ))}
    </div>
  )
}

export default DogList
