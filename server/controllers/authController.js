import User from "../models/userSchema.js"

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

const createUser = async (req, res) => {
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

export { createUser, getUsers }