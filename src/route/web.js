import express from "express"

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index')
    })
    app.use('/', router)
}

export default initWebRoute