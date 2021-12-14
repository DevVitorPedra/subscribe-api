
module.exports ={
   
   async create(req, res, next) {
      const { name, email, phone, city} = req.query
      subscribers.create({
        name,
        email,
        phone,
        city
      })
        .then((result) => {
          res.status(201).json(result); //return with ID -> 201 (CREATED)
        })
        .catch(next);
    },
    
}



