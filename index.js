const Discord = require("discord.js");
const client = new Discord.Client();
const path = require("path");
client.on("ready", () => {
  console.log("Website Started At localhost:3000");
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, ".", "pages", "main.html"));
  });
  app.listen(3000);
});
client.login("");
