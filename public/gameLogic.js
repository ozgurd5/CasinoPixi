//HANDLES CLIENT SIDE GAME LOGIC

//#region TAKE USER CREDITS
fetch("/start", {
  method: "POST",
  headers: { "Content-Type": "text/plain" },
  body: "0"
})
  .then((res) => res.text())
  .then((credits) => {
    creditsAmount = credits;
    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`;

    ChangeGameState(GameStateEnum.IDLE);
  });
//#endregion

//#region INCREASE/DECREASE BET
increaseBetButton.pixiObj.on("pointerdown", () => {
  if (GameState == GameStateEnum.IDLE && betAmount < creditsAmount) {
    betAmount += 10;
    betAmountText.pixiObj.text = `Bet: ${betAmount}`;
  }
});

decreaseBetButton.pixiObj.on("pointerdown", () => {
  if (GameState == GameStateEnum.IDLE && betAmount != 0) {
    betAmount -= 10;
    betAmountText.pixiObj.text = `Bet: ${betAmount}`;
  }
});
//#endregion

//#region MOVINGDOWNCOUNT CALCULATION
let leftMovingDownCount = 0;
let middleMovingDownCount = 0;
let rightMovingDownCount = 0;

//Calculates amount of MovingDownCount required to reach the target result
function CalculateMovingDownCount(result) {
  if (result == "bar") return 0;
  else if (result == "bell") return 1;
  else if (result == "cherry") return 2;
  else if (result == "seven") return 3;
}
//#endregion

//TODO: EXPLAIN MOVINGDOWNCOUNT, TURN COUNT ETC.

//#region SLOT CHECK
function SlotChecker() {
  if (leftSlot.turnCount == 3 && leftSlot.movingDownCount == leftMovingDownCount) {
    leftSlot.StopAnimationManually();
  }

  if (middleSlot.turnCount == 4 && middleSlot.movingDownCount == middleMovingDownCount) {
    middleSlot.StopAnimationManually();
  }

  if (rightSlot.turnCount == 5 && rightSlot.movingDownCount == rightMovingDownCount) {
    rightSlot.StopAnimationManually();
    ChangeGameState(GameStateEnum.IDLE);

    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`; //Update the UI
  }
}

SlotTicker.add((deltaTime) => SlotChecker());
//#endregion

//#region PLAY BUTTON AND SERVER RESPOND
let winAmount = 0;
let results = [];

playButton.pixiObj.on("pointerdown", () => {
  if (GameState == GameStateEnum.IDLE && betAmount != 0) {
    creditsAmount -= betAmount;
    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`;

    ChangeGameState(GameStateEnum.PLAYED);

    fetch("/playButton", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{\"id\": 0, \"betAmount\": ${betAmount}}`
    })
      .then((winAndResults) => winAndResults.json())
      .then((winAndResults) => {
        creditsAmount += winAndResults.win; //Increase but don't update the UI, we must update it when the animations done in the SlotChecker() function.
        results = winAndResults.results.split("-");

        ChangeGameState(GameStateEnum.ANIMATION);
        SlotTicker.start();
        AnimationTicker.start();

        leftMovingDownCount = CalculateMovingDownCount(results[0]);
        middleMovingDownCount = CalculateMovingDownCount(results[1]);
        rightMovingDownCount = CalculateMovingDownCount(results[2]);
      });

    betAmount = 0;
    betAmountText.pixiObj.text = `Bet: ${betAmount}`;
  }
});
//#endregion
