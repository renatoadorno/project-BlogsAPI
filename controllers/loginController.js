const { loginService } = require('../services/loginService');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = { email, password };

  try {
    const userToken = await loginService.login(user);

    if (!userToken) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ token: userToken });
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: 'erro interno' });
  }
};

const loginController = {
  login,
};

module.exports = { loginController };
