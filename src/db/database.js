const   Pool = require('pg')

 const pool = new Pool.Pool ({
    user:"postgres",
    password: "Si92886423!",
    host: "localhost",
    port: 5432,
    database:"users_subscribe_page"
})
module.exports ={
    pool,

    async createsubs(name,email,password,created_on){
       
       try {
        const newSubscriber = await pool.query(
            "INSERT INTO subscribers (username,email,password,created_on) VALUES($1, $2, $3, $4) RETURNING *", [name, email, password, created_on]
        )
      return newSubscriber.rows
       } catch (error) {
         return error
       } 
        
        
    }
    
}



