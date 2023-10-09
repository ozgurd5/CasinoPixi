//CREATES PIXI APPLICATION
//PLACES SPRITES AND TEXTS

let app = new PIXI.Application({
    width: 550,
    height: 810,
    antialias: true
});

document.body.appendChild(app.view);

const blueColorHex = "#19A5E1";
const blueUpButtonPath = "sprites/blueUp.png";
const blueDownButtonPath = "sprites/blueDown.png";
const blueBoxPath = "sprites/blueBox.png";
const blueBoxFlatPath = "sprites/blueBoxFlat.png";
const blueButtonPath = "sprites/blueButton.png";
const blueButtonPressedPath = "sprites/blueButtonPressed.png";

const slotMachinePath = "sprites/slotMachine.png";
const blueSlotBackgroundPath = "sprites/slotBackgroundBlue.png";

const slotMachineSprite = PIXI.Sprite.from(slotMachinePath);
app.stage.addChild(slotMachineSprite);

const playButton = new ozgurButton(blueButtonPath, 1, 275, 620);
app.stage.addChild(playButton.pixiObj);

const increaseBetButton = new ozgurButton(blueUpButtonPath, 1, 400, 675);
app.stage.addChild(increaseBetButton.pixiObj);

const decreaseBetButton = new ozgurButton(blueDownButtonPath, 1, 150, 675);
app.stage.addChild(decreaseBetButton.pixiObj);

const betBox = PIXI.Sprite.from(blueBoxFlatPath);
betBox.anchor.set(0.5, 0.5);
betBox.x = 275;
betBox.y = 675;
app.stage.addChild(betBox);

const creditsBox = PIXI.Sprite.from(blueBoxFlatPath);
creditsBox.anchor.set(0.5, 0.5);
creditsBox.scale.set(1.75, 1);
creditsBox.x = 275;
creditsBox.y = 750;
app.stage.addChild(creditsBox);

const slotBackgroundLeft = PIXI.Sprite.from(blueSlotBackgroundPath);
slotBackgroundLeft.anchor.set(0.5, 0.5);
slotBackgroundLeft.x = 145;
slotBackgroundLeft.y = 350;
app.stage.addChild(slotBackgroundLeft);

const slotBackgroundMiddle = PIXI.Sprite.from(blueSlotBackgroundPath);
slotBackgroundMiddle.anchor.set(0.5, 0.5);
slotBackgroundMiddle.x = 275;
slotBackgroundMiddle.y = 350;
app.stage.addChild(slotBackgroundMiddle);

const slotBackgroundRight = PIXI.Sprite.from(blueSlotBackgroundPath);
slotBackgroundRight.anchor.set(0.5, 0.5);
slotBackgroundRight.x = 405;
slotBackgroundRight.y = 350;
app.stage.addChild(slotBackgroundRight);

const blueStyle = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 32,
  fontStyle: "italic",
  fontWeight: "bold",
  fill: [blueColorHex, "#FFFFFF"], //Gradient
  stroke: "#000000",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowColor: "#666666",
  dropShadowBlur: 2,
  dropShadowAngle: 90,
  dropShadowDistance: 1,
});

let betAmount = 0;
let creditsAmount = 100;

const betAmountText = new PIXI.Text(`Bet: ${betAmount}`, blueStyle);
betAmountText.anchor.set(0.5, 0.5);
betAmountText.x = 275;
betAmountText.y = 675;
app.stage.addChild(betAmountText);

const creditsAmountText = new PIXI.Text(`Credits: ${creditsAmount}`, blueStyle);
creditsAmountText.anchor.set(0.5, 0.5);
creditsAmountText.x = 275;
creditsAmountText.y = 750;
app.stage.addChild(creditsAmountText);