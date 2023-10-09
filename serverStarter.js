const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.sendFile("public/index.html").sendStatus(200);
});

//TODO: MOVE THIS PART TO A DIFFERENT SCRIPT
const fs = require("fs");
const userDataPath = "user-data.json";

app.post("/start", express.text(), (req, res) => {
  const credits = GetCredits(req.body);
  res.status(200).send(`${credits}`);
})

app.post("/playButton", express.json(), (req, res) => {
  ChangeCredits(req.body.id, -1 * req.body.betAmount);
  res.sendStatus(200);
});

function GetCredits(id) {
  const userDataObj = JSON.parse(fs.readFileSync(userDataPath));
  return userDataObj[id].credits;
}

function ChangeCredits(id, amount) {
  const userDataObj = JSON.parse(fs.readFileSync(userDataPath));
  userDataObj[id].credits += amount;
  fs.writeFileSync(userDataPath, JSON.stringify(userDataObj));
}
//TODO: MOVE THIS PART TO A DIFFERENT SCRIPT