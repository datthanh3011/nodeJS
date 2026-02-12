import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import dotenv from 'dotenv'
import initWebRoute from './route/web.js'
import initAPI from './route/api.js'
dotenv.config({ path: '.env' })

const app = express()
app.use(express.urlencoded({ extended: true })); // Để đọc dữ liệu từ Form HTML
app.use(express.json()); // Để đọc dữ liệu JSON (nếu có dùng fetch/axios)

configViewEngine(app)
initWebRoute(app)
initAPI(app)

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000')
})