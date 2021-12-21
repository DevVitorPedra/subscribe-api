const Subscribers = require('../db/models/subscribers')
const { read } = require('../db/database.js')
module.exports = {
    async emailAlreadyExists(email){
        try {
            const result = await read(email)
            return result
            } catch (error) {
                 return error
            }
          
    }

}