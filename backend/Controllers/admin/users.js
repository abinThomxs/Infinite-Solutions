const User = require('../../Models/UserModel')

module.exports = {

    userList : (req, res) => {
        try{
             User.find().then((result) => {
                console.log(result);
                res.json(result);
            })
        } catch(err) {
            console.log(err);
        }
    },

} 