const User = require('../../Models/UserModel')

module.exports = {

    userList : (req, res) => {
        try{
             User.find().then((result) => {
                res.json(result);
            })
        } catch(err) {
            console.log(err);
        }
    },

    blockUser : async (req, res) => {
        const { userId } = req.body;
        const userData = await User.findOne({_id: userId});
        const status = userData.isBlocked;
        try{
           await User.updateOne({_id: userId}, {isBlocked: !status})
        } catch(err) {
            console.log(err);
        }
    },

    activateConsultant: async (req, res) => {
        const { userId } = req.body;
        const userdata = await User.findOne({_id: userId});
        const status = userdata.consultant;
        try{
            await User.updateOne({_id: userId}, {consultant: !status});
        } catch(err){
            console.log(err);
        }
    },

} 