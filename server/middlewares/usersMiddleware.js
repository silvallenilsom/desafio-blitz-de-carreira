const validateUserName = (req, res, next) => {
  const { name } = req.body;
  if ( typeof name !== 'string') {
    return res.status(422)
      .json({ message: 'Nome não deve conter números.'})
  };
  if (!name || name.length < 4) {
    return res.status(422)
      .json({ message: 'Deve ser inserido nome com mais que 4 letras.'});
  }
  next();
};

/* Regex encontrado no link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail, foi usado por cobrir uma boa parte dos casos de validação de email*/

const validateUserEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  result = regex.test(email);
  if (!result) {
    return res.status(422).json({ message: 'E-mail deve possuir um formato válido.' });
  };
  next();
};

const validateUserPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(422).json({ message: 'Senha deve possuir mais que 5 digitos' });
  };
  next();
};

module.exports = {
  validateUserName,
  validateUserEmail,
  validateUserPassword,
};