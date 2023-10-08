const fs = require("fs");
const userDataPath = "user-data.json"

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.post("/UpButton", (req, res) => {
  console.log("Up Button pressed on the client");
  ChangeCredits(0, 10);
  res.sendStatus(200);
});

app.post("/DownButton", (req, res) => {
  console.log("Down Button pressed on the client");
  ChangeCredits(0, -10);
  res.sendStatus(200);
});

function ChangeCredits(id, amount)
{
  const userDataObj = JSON.parse(fs.readFileSync(userDataPath));
  userDataObj[id].credits += amount;
  fs.writeFileSync(userDataPath, JSON.stringify(userDataObj));
}