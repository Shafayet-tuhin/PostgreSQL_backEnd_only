const pool = require('../Database Connection/db')


exports.getUsers = async (req, res) => {
    try {
        const result = await pool.query("select * from users")
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}

exports.getSpecificUser = async (req, res) => {
    try{
            const id = req.params.id 
            const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
            res.json(result.rows[0])
    }
    catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}

exports.postUsers = async (req, res) => {
    try {
        const { name, email } = req.body;
        const result = await pool.query('insert into users (name , email) values ($1,$2) returning *', [name, email])
        res.json(result.rows[0])
    }
    catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
        const result = await pool.query('SELECT * FROM users');


        res.json({message: 'User deleted successfully.', data: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id; 
        const { name, email } = req.body;
        await pool.query('UPDATE users SET name=$1, email=$2 WHERE user_id=$3', [name, email, id]);
        const result = await pool.query('SELECT * FROM users WHERE user_id=$1', [id]);
        res.json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}