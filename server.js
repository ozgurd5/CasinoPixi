//INITIALIZATION AND START
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

app.post("/start", express.text(), (req, res) => {
  const credits = GetCredits(req.body);
  res.status(200).send(`${credits}`);
});

function GetCredits(id) {
  const userDataObj = JSON.parse(fs.readFileSync(userDataPath));
  return userDataObj[id].credits;
}
//INITIALIZATION AND START

//CLIENT COMMUNICATION
const fs = require("fs");
const userDataPath = "user-data.json";

app.post("/playButton", express.json(), (req, res) => {
  ChangeCredits(req.body.id, -1 * req.body.betAmount);
  res.sendStatus(200);
});

function ChangeCredits(id, amount) {
  const userDataObj = JSON.parse(fs.readFileSync(userDataPath));
  userDataObj[id].credits += amount;
  fs.writeFileSync(userDataPath, JSON.stringify(userDataObj));
}
//CLIENT COMMUNICATION

//GENERATING SLOTS
const rates = {
  "cherry": 0.5,
  "bell": 0.3,
  "bar": 0.15,
  "seven": 0.05
}

//RPT = 95%
//TODO: GET RTP AND RATES AND CALCULATE PAYOUTS AUTOMATICALLY

const payouts = {
  "cherry": 7.6,
  "bell": 35.18,
  "bar": 281.44,
  "seven": 7600,
};

function GenerateSlot() {
  const randomNumber = Math.random();

  if (randomNumber <= rates["cherry"]) return "cherry";
  else if (randomNumber > rates["cherry"] && randomNumber <= rates["cherry"] + rates["bell"]) return "bell";
  else if (randomNumber > rates["cherry"] + rates["bell"] && randomNumber <= rates["cherry"] + rates["bell"] + rates ["bar"]) return "bar";
  else return "seven";
}

const generatedNumbers = `${GenerateSlot()}-${GenerateSlot()}-${GenerateSlot()}`;

//CALCULATE CREDITS
//SEND NEW CREDITS + GENERATED NUMBERS
//GENERATING SLOTS