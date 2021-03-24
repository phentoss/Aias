const { Client } = require("discord.js");
const _client = new Client({ fetchAllMembers: true });
const client = (global.client = _client);
const express = require("express");
const ejs = require("ejs");
const app = express();
app.listen(process.env.PORT || 3000);

client.login("Nzc3NTIyOTEzNzYxODIwNjgy.X7EqpA.XI46AMZbZF6z1JDb9h9eqkRTDi8")
  .then(() => console.log("Giriş başarılı!"))
  .catch(() => console.log("Giriş Başarısız!"));

app.engine(".ejs", ejs.__express);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(`${__dirname}/views/`));

app.get("/", (req, res) => {
  const aias = client.users.cache.get("815254561249427468");
  res.render("aias", { client, aias });
});
