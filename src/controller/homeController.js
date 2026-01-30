import pool from '../configs/connectDB.js'
let getHomePage = async (req, res) => {
    try {
        // For pool initialization, see above
        const [rows, fields] = await pool.query('SELECT * FROM `muataisan`');
        return res.render('index', { data: rows })
        // Connection is automatically released when query resolves
    } catch (err) {
        console.log(err);
    }

}

export {
    getHomePage
}