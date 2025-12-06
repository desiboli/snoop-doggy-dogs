import { useFetchDogsQuery } from "@/store/dogs"
import DogCard from "./dog-card"

const DogList = () => {
  const { data: dogs, isLoading, isError } = useFetchDogsQuery(100)

  if (isLoading) return <div>Loading dogs...</div>
  if (isError) return <div>Error loading dogs</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dogs?.map((dog) => (
        <DogCard
          key={dog.name}
          name={dog.name}
          photo={dog.photo}
          breed={dog.breed}
        />
      ))}
    </div>
  )
}

export default DogList
