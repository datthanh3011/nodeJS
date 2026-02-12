import express from "express"
import { getMuaTaiSan, addMuaTaiSan, editMuaTaiSan } from "../controller/apiController.js"
let router = express.Router()

const initAPI = (app) => {
    router.get('/getMuaTaiSan', getMuaTaiSan)
    router.post('/addMuaTaiSan', addMuaTaiSan)
    router.put('/editMuaTaiSan/:id', editMuaTaiSan)
    app.use('/api/v1/', router)
}

export default initAPI