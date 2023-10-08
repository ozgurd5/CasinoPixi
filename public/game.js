let app = new PIXI.Application({
    width: 550,
    height: 810,
    antialias: true
});

document.body.appendChild(app.view);

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
creditsBox.scale.set(2, 1);
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