import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { FakeDb } from "../db/FakeDb.js"

class BurgersService {
    // createBurger(newBurger) {
    //     FakeDb.burgers.push(newBurger)
    //     return newBurger
    // }

    getAllBurgers() {
        return FakeDb.burgers
    }
    getBurgerById(burgerId) {
        const burger = FakeDb.burgers.find(b => b.id == burgerId)
        if (!burger) {
            throw new BadRequest('Invalid id, please check your ID');
        }
        return burger
    }
    editBurger(updateBurgerData) {
        const burger = this.getBurgerById(updateBurgerData.id)
        burger.name = updateBurgerData.name || burger.name
        burger.price = updateBurgerData.price || burger.price
        return burger

    }


    async deletBurgerById(burgerId) {
        const burger = await this.getBurgerById(burgerId)
        FakeDb.burgers = FakeDb.burgers.filter(b => b.id != burgerId)

    }


}
export const burgersService = new BurgersService()
