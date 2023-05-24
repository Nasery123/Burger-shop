import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.createBurger)
    }

    // async createBurger(req, res, next) {
    //     try {
    //         const burger = await burgersService.createBurger(req.body)
    //         res.send(burger)

    //     } catch (error) {
    //         next(error)

    //     }
    // }


    async getBurgers(req, res, next) {
        try {
            const burgers = await burgersService.getAllBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)

        }
    }
    async getBurgerById(req, res, next) {
        try {
            const burger = await burgersService.getBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)

        }
    }
    async editBurger(req, res, next){
        try {
            const burger = await burgersService.editBurger(req.body)
            res.send(burger)
        } catch (error) {
            next(error)

        }
    }
    async deletBurger(req, res, next){
        try {
            const burger = await burgersService.deletBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)

        }



}
