import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

interface DogCardProps {
  name: string
  photo: string
  breed: string
}

const DogCard = ({ name, photo, breed }: DogCardProps) => {
  return (
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
  )
}

export default DogCard
