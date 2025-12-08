import { useSearchParams, Link } from "react-router"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const DogPage = () => {
  const [searchParams] = useSearchParams()

  // Read the dog data from the URL query parameters
  const name = searchParams.get("name")
  const photo = searchParams.get("photo")
  const breed = searchParams.get("breed")

  // Handle case where data is missing
  if (!name || !photo || !breed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-bold">Dog not found</h2>
        <Button asChild>
          <Link to="/">Go Back Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/">&larr; Back to Adoption Center</Link>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-slate-50">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover min-h-[300px] max-h-[600px]"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-4xl mb-2">{name}</CardTitle>
              <CardDescription className="text-xl capitalize">
                {breed}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg mt-4">
                Meet {name}! This adorable {breed} is looking for a forever
                home. They love long walks, treats, and belly rubs.
              </p>

              <div className="mt-8">
                <Button size="lg" className="w-full md:w-auto">
                  Adopt {name} Now
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DogPage
