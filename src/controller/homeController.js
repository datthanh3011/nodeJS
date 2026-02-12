
import pool from '../configs/connectDB.js'
let getHomePage = async (req, res) => {
    try {
        // For pool initialization, see above
        const [rows, fields] = await pool.execute('SELECT * FROM `muataisan`');
        return res.render('index', { data: rows })
        // Connection is automatically released when query resolves
    } catch (err) {
        console.log(err);
    }

}
let getDetailPage = async (req, res) => {
    const [data, fields] = await pool.execute('select muataisan.id, muataisan.ngaymua, muataisan.soluong, muataisan.giamua, muataisan.mota, taisan.tentaisan, loaitaisan.tenloaitaisan  from qltaisan.muataisan left join qltaisan.taisan on muataisan.id_taisan = taisan.id left join qltaisan.loaitaisan on taisan.id_loaitaisan = loaitaisan.id where muataisan.id = ?', [req.params.id])
    const param = req.params;
    return res.render('detail', { dt: data })
}
let getBuyGold = async (req, res) => {
    let [data, fields] = await pool.execute('select * from qltaisan.taisan')
    return res.render('buyGold', { data: data })
}
let addBuyGold = async (req, res) => {
    const dateBuyGold = new Date(req.body.date)
    console.log("<<<<<<<<<<data: ", req.body)
    await pool.execute(`INSERT INTO qltaisan.muataisan (id_taisan, ngaymua, soluong, giamua, mota)
    VALUES (?, ?, ?,?,?)`, [Number(req.body.typeGold), dateBuyGold, parseFloat(req.body.buyQuality), parseFloat(req.body.buyPrice), req.body.buydescription])

    return res.redirect('/buy')
}
let deleteGold = async (req, res) => {
    await pool.execute(`DELETE FROM qltaisan.muataisan WHERE id = ?`, [Number(req.body.data)])
    return res.redirect("/")
}

export {
    getHomePage, getDetailPage, getBuyGold, addBuyGold, deleteGold
}