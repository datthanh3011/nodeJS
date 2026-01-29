import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import dotenv from 'dotenv'
import initWebRoute from './route/web.js'
dotenv.config({ path: '.env' })

const app = express()
configViewEngine(app)
initWebRoute(app)

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000')
})