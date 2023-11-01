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

//Once the slot spinning animation plays, we have to count down how many times did a symbol moved down in a single slot. Since we know the starting symbol, we can also know..
//..the current showing symbol using "MovingDownCount" variable. For example: Symbol order is cherry-bell-bar-seven and default showing symbol is bar. Animation played and..
//..all the symbols moved down one once. That makes the MovingDownCount variables 1 and that means the current order is seven-cherry-bell-bar. Because animation works that..
//..way. It's just put the bottom one to the top. Anyways. After one time moving down makes the current showing symbol bell.

//Long story short, if we know the moving down count, we can know the current showing symbol and therefore when to stop the animation.
//"SLOT CHECK" region is responsible for stopping the animation in the correct symbol which coming from the server in the "PLAY BUTTON AND SERVER RESPOND" region.

//#region SLOT CHECK
let leftMovingDownCount = 0;
let middleMovingDownCount = 0;
let rightMovingDownCount = 0;

//Calculates amount of MovingDownCount required to reach the target symbol
function CalculateMovingDownCount(result) {
  if (result == "bar") return 0;
  else if (result == "bell") return 1;
  else if (result == "cherry") return 2;
  else if (result == "seven") return 3;
}

//In order to create some spin time and not to stop immediately, we have to wait a few turns before stop.
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

    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`; //Credits amount in the UI must be updated in here where the animations are done
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
        creditsAmount += winAndResults.win; //Increase credits but don't update the UI, it must be updated when the animations are done in the SlotChecker() function
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
