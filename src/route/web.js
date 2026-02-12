import express from "express"
import { getHomePage, getDetailPage, getBuyGold, addBuyGold, deleteGold } from "../controller/homeController.js"
let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/detail/id/:id', getDetailPage)
    router.get('/buy', getBuyGold)
    router.post('/addbuygold', addBuyGold)
    router.post('/deleteGold', deleteGold)
    app.use('/', router)
}

export default initWebRoute