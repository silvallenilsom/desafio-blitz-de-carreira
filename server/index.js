const express = require("express");
const authorRoute = require('./routes/authorsRoutes');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

/* app.get("/api", (_req, res) => {
  res.json({ message: "Testando o NodeJS com Express!" });
}); */

app.use("/api", authorRoute);

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});