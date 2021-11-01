const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (_req, res) => {
  res.json({ message: "Testando o NodeJS com Express!" });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});