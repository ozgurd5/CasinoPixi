let app = new PIXI.Application({
    width: 450,
    height: 800,
    backgroundColor: 0x31B9B3,
    antialias: true
});

document.body.appendChild(app.view);

//TODO: create button class

const upButton = PIXI.Sprite.from("sprites/up.png");
upButton.scale.set(0.5,0.5);
upButton.anchor.set(0.5,0.5);
upButton.x = app.screen.width / 2;
upButton.y = app.screen.height / 8;
upButton.interactive = true;
upButton.cursor = "pointer";
app.stage.addChild(upButton);

const upButtonData = { id: "0", credits: "100" };

upButton.on("click", () => {
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

const downButton = PIXI.Sprite.from("sprites/down.png");
downButton.scale.set(0.5, 0.5);
downButton.anchor.set(0.5, 0.5);
downButton.x = app.screen.width / 2;
downButton.y = app.screen.height / 8 * 7;
downButton.interactive = true;
downButton.cursor = "pointer";
app.stage.addChild(downButton);

downButton.on("click", () => {
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