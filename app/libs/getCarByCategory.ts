import { carsDB } from '../db'

const getCarByCategory = (category: string) => {
    const all = carsDB;
    let cars = []
    for (let i = 0; i < all.length; i++) {
        if (all[i].brand === category) {
            cars.push(all[i])
        }
    }
    console.log(cars)
    return cars;
}

export default getCarByCategory