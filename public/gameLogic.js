//HANDLES CLIENT SIDE GAME LOGIC

fetch("/start", {
  method: "POST",
  headers: { "Content-Type": "text/plain" },
  body: "0",
})
  .then((res) => res.text())
  .then((credits) => {
    creditsAmount = credits;
    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`;

    ChangeGameState(GameStateEnum.IDLE);
  });

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

playButton.pixiObj.on("pointerdown", () => {
  if (GameState == GameStateEnum.IDLE && betAmount != 0) {
    creditsAmount -= betAmount;
    creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`;

    ChangeGameState(GameStateEnum.PLAYED);

    fetch("/playButton", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{\"id\": 0, \"betAmount\": ${betAmount}}`,
    })
      .then((winAndResults) => winAndResults.json())
      .then((winAndResults) => {
        creditsAmount += winAndResults.win;
        creditsAmountText.pixiObj.text = `Credits: ${creditsAmount}`;

        console.log(winAndResults.results);
        ChangeGameState(GameStateEnum.ANIMATION);
      });

    betAmount = 0;
    betAmountText.pixiObj.text = `Bet: ${betAmount}`;
  }
});
