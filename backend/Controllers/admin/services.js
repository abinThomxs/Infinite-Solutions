const Service = require('../../Models/Services');

module.exports = {

    addService: async (req, res) => {
        try{
            const { serviceName, subName, description, rate } = req.body;
            const service = await Service.create({ serviceName, subName, description, rate });
            res.json({service: service._id, created: true})
        } catch(err) {
            console.log(err);
        }
    },

    servicesList: async (req, res) => {
        try{
            const serviceData = await Service.find()                 
            res.json({serviceData})
        } catch(err){
            console.log(err);
        }
    }

}