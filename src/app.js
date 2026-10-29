const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "funcionando",
  });
});

app.get("/api/tareas", (req, res) => {
  res.json([
    { id: 1, titulo: "Configurar GitHub Actions", completada: true },
    { id: 2, titulo: "Desple", completada: false },
    { id: 3, titulo: "Hacer un push", completada: false },
  ]);
});

module.exports = app;
