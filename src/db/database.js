const   Pool = require('pg')

 const pool = new Pool.Pool ({
    user:"cjiifhahgnzlkl",
    password: process.env.DB_PASS,
    host: "ec2-3-228-78-248.compute-1.amazonaws.com",
    port: 5432,
    database:"d7p7oc4tgg4t3p"
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



