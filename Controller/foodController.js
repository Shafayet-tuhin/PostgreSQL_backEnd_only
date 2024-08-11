const pool = require('../Database Connection/db')

exports.getfood = async (req, res) => {
    try {
        const result = await pool.query("select * from fastfood")
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}
