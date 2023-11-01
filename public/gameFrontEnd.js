//PLACES SPRITES AND TEXTS.
//DRAW ORDER: SLOT BACKGROUNDS, SLOTS, BUTTONS+BOXES, TEXTS

//#region PATHS
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

const slotCherryPath = "sprites/slotCherry.png";
const slotBellPaht = "sprites/slotBell.png";
const slotBarPath = "sprites/slotBar.png";
const slot7Path = "sprites/slot7.png";
const slotPaths = [slotCherryPath, slotBellPaht, slotBarPath, slot7Path];

const slotMachinePath = "sprites/slotMachine.png";
//#endregion

//#region SLOT BACKGROUNDS AND SLOTS
const slotBackgroundLeft = new ozgurSprite(slotBackgroundPaths, 1, 1, 145, 350);
const slotBackgroundMiddle = new ozgurSprite(slotBackgroundPaths, 1, 1, 275, 350);
const slotBackgroundRight = new ozgurSprite(slotBackgroundPaths, 1, 1, 405, 350);

const leftSlot = new ozgurSlot(slotPaths, 0.9, 0.9, 145, 150, 100);
const middleSlot = new ozgurSlot(slotPaths, 0.9, 0.9, 275, 150, 100);
const rightSlot = new ozgurSlot(slotPaths, 0.9, 0.9, 405, 150, 100);
//#endregion

//#region SLOT MACHINE
const slotMachineSprite = PIXI.Sprite.from(slotMachinePath);
app.stage.addChild(slotMachineSprite);
//#endregion

//#region BUTTONS AND BOXES
const playButton = new ozgurButton(buttonPaths, 1, 275, 620);
const increaseBetButton = new ozgurButton(upButtonPaths, 1, 400, 675);
const decreaseBetButton = new ozgurButton(downButtonPaths, 1, 150, 675);

const betBox = new ozgurSprite(boxFlatPaths, 1, 1, 275, 675);
const creditsBox = new ozgurSprite(boxFlatPaths, 1.5, 1, 275, 750);
//#endregion

//#region TEXT STYLES
const redColorHex = "#E86A17";
const greenColorHex = "#73CD4B";
const blueColorHex = "#19A5E1";
const yellowColorHex = "#FFCC00";

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
  dropShadowDistance: 1
});

const redStyle = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 32,
  fontStyle: "italic",
  fontWeight: "bold",
  fill: [redColorHex, "#FFFFFF"], //Gradient
  stroke: "#000000",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowColor: "#666666",
  dropShadowBlur: 2,
  dropShadowAngle: 90,
  dropShadowDistance: 1
});

const greenStyle = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 32,
  fontStyle: "italic",
  fontWeight: "bold",
  fill: [greenColorHex, "#FFFFFF"], //Gradient
  stroke: "#000000",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowColor: "#666666",
  dropShadowBlur: 2,
  dropShadowAngle: 90,
  dropShadowDistance: 1
});

const yellowStyle = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 32,
  fontStyle: "italic",
  fontWeight: "bold",
  fill: [yellowColorHex, "#FFFFFF"], //Gradient
  stroke: "#000000",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowColor: "#666666",
  dropShadowBlur: 2,
  dropShadowAngle: 90,
  dropShadowDistance: 1
});

const textStyles = [blueStyle, redStyle, greenStyle, yellowStyle];
//#endregion

//#region TEXTS
let betAmount = 0;
let creditsAmount = 0;

const betAmountText = new ozgurText(`Bet: ${betAmount}`, textStyles, 275, 675);
app.stage.addChild(betAmountText.pixiObj);

const creditsAmountText = new ozgurText(`Credits: ${creditsAmount}`, textStyles, 275, 750);
app.stage.addChild(creditsAmountText.pixiObj);
//#endregion
