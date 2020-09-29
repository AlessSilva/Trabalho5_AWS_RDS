const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 78300 });
}

module.exports = {
  async login(request, response) {
    try {
      const { password, email, islogged } = request.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return response.status(400).send({ message: "Email inválido." });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return response.status(400).send({ message: "Senha incorreta" });
      }

      await user.update({ islogged }, { where: { id: user.id } });
      user.password = undefined;
      const token = generateToken({ id: user.id });
      return response
        .status(200)
        .send({ message: "Usuário logado com sucesso", user, token });
    } catch (error) {
      console.log(error);
      return response.send(error);
    }
  },

  async index(request, response) {
    try {
      const users = await User.findAll();

      if (users == "" || users == null) {
        return response
          .status(200)
          .send({ message: "Nenhum usuário cadastrado" });
      }

      return response.status(200).send({ users });
    } catch (error) {
      console.log(error);
      return response.send(error);
    }
  },

  async store(request, response) {
    try {
      const { name, password, email } = request.body;
      const user = await User.create({ name, password, email });
      return response
        .status(200)
        .send({ message: "Usuário cadastrado com sucesso!", user });
    } catch (error) {
      console.log(error);
      return response.send(error);
    }
  },

  async update(request, response) {
    try {
      const { name, password, email } = request.body;
      const { user_id } = request.params;
      await User.update({ name, password, email }, { where: { id: user_id } });
      return response
        .status(200)
        .send({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
      return response.send(error);
    }
  },

  async delete(request, response) {
    try {
      const { user_id } = request.params;
      await User.destroy({ where: { id: user_id } });
      return response
        .status(200)
        .send({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      return response.send(error);
    }
  },
};
