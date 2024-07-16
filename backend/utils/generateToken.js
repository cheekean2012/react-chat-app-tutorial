import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '15d'});

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // prevent xss attack cross site scripting attack
        sameSite: 'strict',  // csrf attack cross site request forgery attack
        secure: process.env.NODE_ENV !== 'development' // cookie only works in https
    })
}

export default generateTokenAndSetCookie;