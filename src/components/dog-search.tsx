import { useState } from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { useFetchListAllBreedsQuery } from "@/store/dogs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DogSearch = () => {
  const { data: breeds } = useFetchListAllBreedsQuery()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? breeds?.find((breed) => breed === value) : "Select breed..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search breed..." />
          <CommandList>
            <CommandEmpty>No breed found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="all"
                onSelect={() => {
                  setValue("")
                  setOpen(false)
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === "all" ? "opacity-100" : "opacity-0"
                  )}
                />
                All
              </CommandItem>
              {breeds?.map((breed) => (
                <CommandItem
                  key={breed}
                  value={breed}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === breed ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {breed}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default DogSearch
