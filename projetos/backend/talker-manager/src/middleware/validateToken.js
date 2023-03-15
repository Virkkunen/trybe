function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const HTTP_UNAUTH_STATUS = 401;

  if (!authorization) {
    return res.status(HTTP_UNAUTH_STATUS)
    .json({ message: 'Token não encontrado' });
  }

  if (authorization.length !== 16 || typeof (authorization) !== 'string') {
    return res.status(HTTP_UNAUTH_STATUS)
    .json({ message: 'Token inválido' });
  }

  next();
}

module.exports = validateToken;