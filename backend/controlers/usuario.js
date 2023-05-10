const { usuarioModel } = require('../models/usuario');
const jwt = require('jsonwebtoken');
const secretKey = 'chave_secreta_do_token';

// npm install jsonwebtoken

exports.getusuario = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido.' });
      }

      const getUsuarios = async () => {
        const usuarios = await usuarioModel.find();
        return usuarios;
      };

      getUsuarios()
        .then((usuarios) => res.json(usuarios))
        .catch((error) => res.status(500).json({ message: error.message }));
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createusuario = async (req, res) => {
  try {
    const { email, nome, senha, nrsec } = req.body;

    const payload = {
      email,
      nome,
      senha,
      nrsec
    };

    const newUser = new usuarioModel(payload);
    newUser.token = jwt.sign(payload, secretKey);

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
