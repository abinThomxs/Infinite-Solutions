const User = require('../../Models/UserModel');

module.exports = {

    consultantsList: (req, res) => {
        try{
            User.find({consultant: true}).then((result) => {
               res.json(result);
           })
       } catch(err) {
           console.log(err);
       }
   },

   blockConsultant : async (req, res) => {
    const { userId } = req.body;
    const consultantData = await User.findOne({_id: userId});
    const status = consultantData.isBlocked;
    try{
       await User.updateOne({_id: userId}, {isBlocked: !status})
    } catch(err) {
        console.log(err);
    }
},
    
}