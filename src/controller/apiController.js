import pool from '../configs/connectDB.js'
let getMuaTaiSan = async (req, res) => {
    const [data, fields] = await pool.execute('select * from qltaisan.muataisan')
    return res.status(200).json({
        message: "ok",
        data: data
    })
}
let addMuaTaiSan = async (req, res) => {
    const { id_taisan, ngaymua, soluong, giamua, mota } = req.body
    console.log(id_taisan)
    const dateBuyGold = new Date(ngaymua)
    await pool.execute(`INSERT INTO qltaisan.muataisan (id_taisan, ngaymua, soluong, giamua, mota)
    VALUES (?, ?, ?,?,?)`, [Number(id_taisan), dateBuyGold, parseFloat(soluong), parseFloat(giamua), mota])
    return res.status(200).json({
        message: "ok"

    })
}
let editMuaTaiSan = (req, res) => {
    let dt = req.body
    console.log(dt)
    return res.status(200).json({
        message: "ok",
        data: dt
    })
}

export {
    getMuaTaiSan, addMuaTaiSan, editMuaTaiSan
}