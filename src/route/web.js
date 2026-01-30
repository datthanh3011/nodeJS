import express from "express"
import { getHomePage } from "../controller/homeController.js"
import { getAboutPage } from "../controller/aboutController.js"
let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    app.use('/', router)
}

export default initWebRoute