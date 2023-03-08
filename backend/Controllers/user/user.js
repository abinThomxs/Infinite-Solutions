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

    postEditProfile:  (req, res) => {
        const userData = req.body;
        User.updateOne({_id: userData.user._id}, userData.user).then((data) => {
            console.log(data)
        })
    }

} 