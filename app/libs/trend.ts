import { carsDB } from "../db"


const trend = async () => {
    const carsData = carsDB
    const data = carsData.slice(1, 5)

  return data
}

export default trend