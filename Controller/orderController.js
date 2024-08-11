const pool = require('../Database Connection/db')

exports.getOrder = async (req , res ) => {
    try{
          const result = await pool.query(`select u.name , STRING_AGG(f.name, ',') as food_items , sum(f.price) as total_price from orders o join users u on o.user_id = u.user_id join fastfood f on o.f_id = f.f_id group by u.name`)
          res.json(result.rows)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getSpeceficPersonOrder = async (req, res) => {
    try {
        const id = req.params.id ;
        const result = await pool.query(`select u.name , STRING_AGG(f.name, ',') as food_items , sum(f.price) as total_price from orders o join users u on o.user_id = u.user_id join fastfood f on o.f_id = f.f_id where o.user_id = ($1) group by u.name ` , [id])
        res.json(result.rows)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.giveOrder = async (req,res) => {
    try{
          const { userId, foodId } = req.body ;
          await pool.query(`insert into orders (user_id, f_id) values ($1, $2)`, [userId, foodId])
          
          const result =  await pool.query(`select u.name , STRING_AGG(f.name, ',') as food_items , sum(f.price) as total_price from orders o join users u on o.user_id = u.user_id join fastfood f on o.f_id = f.f_id where o.user_id = ($1) group by u.name ` , [userId])

          res.json({message: 'Order given successfully' , Data : result.rows})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}