import { carsDB } from "../db";

const getCarData = async (id: string) => {
    const all = carsDB
    let car;
    for(let i = 0; i < all.length; i++) {
        if(all[i].id === id) {
            car = all[i]
        }
    }
    return car
}

export default getCarData