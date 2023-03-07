const User = require('../../Models/UserModel')

module.exports = {

    postUserData : (req, res) => {
        const userId = req.body;
        try{
             User.findById({_id:userId.userId}).then((result) => {
                res.json(result);
            })
        } catch(err) {
            console.log(err);
        }
    },

} 