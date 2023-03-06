const UserModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'infinitesolutions secret key',{
        expiresIn: maxAge,
    });
};

const handleErrors = (err) => {
    let errors = { email:'', password:'', name: ''};

    if (err.message === 'Incorrect Email') 
    errors.email = 'Email is not registered'

    if (err.message === 'Incorrect Password') 
    errors.email = 'Password is incorrect'

    if(err.code === 11000){
        errors.email = 'Email is already registered';
        return errors;
    }

    if(err.message.includes('Users validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports.signup = async (req, res, next) => {
    try{
        const { email, password, name, confirmPassword } = req.body;
            const user = await UserModel.create({ email, password, name });-            
            res.status(201).json({user: user._id, created: true});                
        } catch (err) {
            console.log(err);
            const errors = handleErrors(err);
            res.json({ errors, created: false });
           }
       
}; 

module.exports.login = async (req, res, next) => {
   try{
    const { email, password } = req.body;
        const user = await UserModel.login( email, password,  );
        const token = createToken(user._id)
        res.status(200).json({user: user._id, created: true, token, userType: user.userType});
   } catch (err) {
    console.error(err);
   }
};