import jwt from "jsonwebtoken"

export function checkToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ msg: 'Acesso negado' })
    }

    try{
        const { JWT_SECRET } = process.env;
        const decoded = jwt.verify(token, JWT_SECRET);
        
        req.user_id = decoded.user_id;
        next();
    } catch(err) {
        res.status(400).json({ msg: "Token inválido" })
    };
};