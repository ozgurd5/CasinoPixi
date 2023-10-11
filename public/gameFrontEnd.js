//CREATES PIXI APPLICATION
//PLACES SPRITES AND TEXTS

//#region PIXI APP INIT
let app = new PIXI.Application({
    width: 550,
    height: 810,
    antialias: true
});
document.body.appendChild(app.view);
//#endregion

//#region PATHS
const redColorHex = "#E86A17";
const greenColorHex = "#73CD4B";
const blueColorHex = "#19A5E1";
const yellowColorHex = "#FFCC00";

const redUpButtonPath = "sprites/redUp.png";
const greenUpButtonPath = "sprites/greenUp.png";
const blueUpButtonPath = "sprites/blueUp.png";
const yellowUpButtonPath = "sprites/yellowUp.png";
const upButtonPaths = [blueUpButtonPath, redUpButtonPath, greenUpButtonPath, yellowUpButtonPath];

const redDownButtonPath = "sprites/redDown.png";
const greenDownButtonPath = "sprites/greenDown.png";
const blueDownButtonPath = "sprites/blueDown.png";
const yellowDownButtonPath = "sprites/yellowDown.png";
const downButtonPaths = [blueDownButtonPath, redDownButtonPath, greenDownButtonPath, yellowDownButtonPath];

const redBoxPath = "sprites/redBox.png";
const greenBoxPath = "sprites/greenBox.png";
const blueBoxPath = "sprites/blueBox.png";
const yellowBoxPath = "sprites/yellowBox.png";
const boxPaths = [blueBoxPath, redBoxPath, greenBoxPath, yellowBoxPath];

const redBoxFlatPath = "sprites/redBoxFlat.png";
const greenBoxFlatPath = "sprites/greenBoxFlat.png";
const blueBoxFlatPath = "sprites/blueBoxFlat.png";
const yellowBoxFlatPath = "sprites/yellowBoxFlat.png";
const boxFlatPaths = [blueBoxFlatPath, redBoxFlatPath, greenBoxFlatPath, yellowBoxFlatPath];

const redButtonPath = "sprites/redButton.png";
const greenButtonPath = "sprites/greenButton.png";
const blueButtonPath = "sprites/blueButton.png";
const yellowButtonPath = "sprites/yellowButton.png";
const buttonPaths = [blueButtonPath, redButtonPath, greenButtonPath, yellowButtonPath];

const redButtonPressedPath = "sprites/redButtonPressed.png";
const greenButtonPressedPath = "sprites/greenButtonPressed.png";
const blueButtonPressedPath = "sprites/blueButtonPressed.png";
const yellowButtonPressedPath = "sprites/yellowButtonPressed.png";
const buttonPressedPaths = [blueButtonPressedPath, redButtonPressedPath, greenButtonPressedPath, yellowButtonPressedPath];

const redSlotBackgroundPath = "sprites/slotBackgroundRed.png";
const greenSlotBackgroundPath = "sprites/slotBackgroundGreen.png";
const blueSlotBackgroundPath = "sprites/slotBackgroundBlue.png";
const yellowSlotBackgroundPath = "sprites/slotBackgroundYellow.png";
const slotBackgroundPaths = [blueSlotBackgroundPath, redSlotBackgroundPath, greenSlotBackgroundPath, yellowSlotBackgroundPath];

const slotMachinePath = "sprites/slotMachine.png";
//#endregion PATHS

//#region SLOT MACHINE
const slotMachineSprite = PIXI.Sprite.from(slotMachinePath);
app.stage.addChild(slotMachineSprite);
//#endregion SLOT MACHINE

//#region BUTTONS
const playButton = new ozgurButton(buttonPaths, 1, 275, 620, 0.1);
app.stage.addChild(playButton.pixiObj);

const increaseBetButton = new ozgurButton(upButtonPaths, 1, 400, 675, 0.1);
app.stage.addChild(increaseBetButton.pixiObj);

const decreaseBetButton = new ozgurButton(downButtonPaths, 1, 150, 675, 0.1);
app.stage.addChild(decreaseBetButton.pixiObj);
//#endregion BUTTONS

//#region SLOTS AND BOXES
const betBox = new ozgurSprite(boxFlatPaths, 1, 1, 275, 675, 0.1);
app.stage.addChild(betBox.pixiObj);

const creditsBox = new ozgurSprite(boxFlatPaths, 1.5, 1, 275, 750, 0.1);
app.stage.addChild(creditsBox.pixiObj);

const slotBackgroundLeft = new ozgurSprite(slotBackgroundPaths, 1, 1, 145, 350, 0.1);
app.stage.addChild(slotBackgroundLeft.pixiObj);

const slotBackgroundMiddle = new ozgurSprite(slotBackgroundPaths, 1, 1, 275, 350, 0.1);
app.stage.addChild(slotBackgroundMiddle.pixiObj);

const slotBackgroundRight = new ozgurSprite(slotBackgroundPaths, 1, 1, 405, 350, 0.1);
app.stage.addChild(slotBackgroundRight.pixiObj);
//#endregion SLOTS AND BOXES

//#region TEXT
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
let creditsAmount = 0;

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
//#endregion TEXT