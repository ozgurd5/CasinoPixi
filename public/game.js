let app = new PIXI.Application({
    width: 450,
    height: 800,
    backgroundColor: 0x31B9B3,
    antialias: true
});

document.body.appendChild(app.view);

const upButtonPath = "sprites/blueUp.png";
const upButton = new ozgurButton(upButtonPath, 2, app.screen.width/2, app.screen.height/8);
app.stage.addChild(upButton.pixiObj);

const upButtonData = { id: "0", credits: 100 };

upButton.pixiObj.on("click", () => {
    fetch("/UpButton", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upButtonData),
    }).then(() => {
      console.log("Up Button pressed");
      console.log(JSON.stringify(upButtonData));
    });
});

const downButtonPath = "sprites/blueDown.png";
const downButton = new ozgurButton(downButtonPath, 2, app.screen.width/2, app.screen.height/8*7);
app.stage.addChild(downButton.pixiObj);

downButton.pixiObj.on("click", () => {
  fetch("/DownButton", {
    method: "POST",
  }).then(() => {
    console.log("Down Button pressed");
  });
});

const style = new PIXI.TextStyle({
  fill: 0xffffff,
  fontSize: 48,
});

const text = new PIXI.Text("text", style);
text.anchor.set(0.5);
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;
app.stage.addChild(text);