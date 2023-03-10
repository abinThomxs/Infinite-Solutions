import { findById } from '../Models/UserModel';
import { verify } from 'jsonwebtoken';

export function checkUser(req, res, next) {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'infinitesolutions secret key', async (err, decodedToken) => {
            console.log(token);
            if(err){
               res.json({status: false});
               next(); 
            } else {
                const user = await findById(decodedToken.id);
                if(user) res.json({status: true, user: user.email});
                else res.json({status: false});
                next();
            }
        })
    } else {
        res.json({ status: false});
        next();
    }
}