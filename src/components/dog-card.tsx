import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Link } from "react-router"
import { Skeleton } from "./ui/skeleton"

interface DogCardProps {
  name: string
  photo: string
  breed: string
}

const DogCard = ({ name, photo, breed }: DogCardProps) => {
  const dogUrl = `/dog?name=${encodeURIComponent(
    name
  )}&photo=${encodeURIComponent(photo)}&breed=${encodeURIComponent(breed)}`

  return (
    <Link to={dogUrl}>
      <Card>
        <CardContent className="overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={photo}
              alt={name}
              className="rounded-md object-contain w-full h-full"
            />
          </AspectRatio>
        </CardContent>
        <CardHeader className="text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{breed}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export const DogCardSkeleton = () => {
  return (
    <Card>
      <CardContent className="overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="w-full h-full rounded-md" />
        </AspectRatio>
      </CardContent>
      <CardHeader className="text-center space-y-2">
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-1/3 mx-auto" />
      </CardHeader>
    </Card>
  )
}

export default DogCard
