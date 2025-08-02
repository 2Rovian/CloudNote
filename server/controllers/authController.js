import User from "../models/userSchema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json(
            { msg: "Erro ao buscar usuários" }
        )
    }
};

const handleRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (
            !username || !email || !password ||
            !username.trim() || !email.trim() || !password.trim()
        ) {
            res.json({
                msg: "Erro ao cadastrar usuário. Preencha todos os campos"
            })
        }

        const ExistingUser = await User.findOne({ username });
        if (ExistingUser) {
            res.json({
                msg: "Usuário já cadastrado"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ msg: "Erro ao criar usuário", error: err.message });
    }
};

const handleLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password ) {
            return res.json({msg: "Username e senha são necessários"})
        };
        
        const user = await User.findOne({ username });
        if(!user) {
            return res.json({ msg: `Usuário [${username}] não existe `})
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({ msg: "Credenciais inválidas" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({msg: "Autenticação realizada com sucesso; Token: ", token});
    } catch (error) {
        
    }
}

export { handleRegister, getUsers, handleLogin }