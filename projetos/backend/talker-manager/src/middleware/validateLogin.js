function validateLogin(req, res, next) {
  const { email, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const HTTP_BAD_STATUS = 400;
  if (!email) {
    return res.status(HTTP_BAD_STATUS).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return res.status(HTTP_BAD_STATUS).json({ message: 'O campo "password" é obrigatório' });
  }
  if (!emailRegex.test(email)) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (password.length < 6) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
}

module.exports = validateLogin;