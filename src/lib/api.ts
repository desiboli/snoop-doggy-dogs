import axios from "axios"
import type Dog from "../models/dog"
import { faker } from "@faker-js/faker"

const instance = axios.create({
  baseURL: "https://dog.ceo/api",
})

export const fetchDogs = (count: number): Promise<Dog[]> => {
  if (count > 50) throw new Error("Cannot fetch more than 50 dogs at a time")
  return instance.get(`/breeds/image/random/${count}`).then((res) => {
    return res.data.message.map(
      (url: string) =>
        ({
          name: faker.person.firstName(),
          photo: url,
          breed: url.split("/")[4],
        } as Dog)
    )
  })
}

export const fetchListAllBreeds = () => {
  return instance.get("/breeds/list/all")
}

export const fetchDogsByBreed = (breed: string, count: number) => {
  if (count > 50) throw new Error("Cannot fetch more than 50 dogs at a time")
  return instance.get(`/breed/${breed}/images/random/${count}`).then((res) => {
    return res.data.message.map(
      (url: string) =>
        ({
          name: faker.person.firstName(),
          photo: url,
          breed: url.split("/")[4],
        } as Dog)
    )
  })
}
