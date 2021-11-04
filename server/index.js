const express = require("express");
const authorRoute = require('./routes/authorsRoutes');
const usersRoute = require('./routes/usersRoutes');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

app.use("/api", authorRoute);
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});