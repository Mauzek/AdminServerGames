const express = require("express");
const mainRoute = require("./routers/main");
const gamesRouter = require("./routers/games");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});

app.get("/games/:id", (req, res) => {
  if (!games[req.params.id]) {
    res.send(`Такой игры не существует`);
    return;
  }
  const { title, description } = games[req.params.id];
  res.send(
    `Новое издание игры - ${title}, откроет для вас новый мир: ${description}`
  );
});
