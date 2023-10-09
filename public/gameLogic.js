//HANDLES CLIENT SIDE GAME LOGIC

fetch("/start", {
  method: "POST",
  headers: { "Content-Type": "text/plain" },
  body: "0",
})
.then(res => res.text())
.then(credits => {
    creditsAmount = credits;
    creditsAmountText.text = `Credits: ${creditsAmount}`;
});

increaseBetButton.pixiObj.on("pointerdown", () => {
    if (betAmount < creditsAmount) {
      betAmount += 10;
      betAmountText.text = `Bet: ${betAmount}`;
    }
});

decreaseBetButton.pixiObj.on("pointerdown", () => {
    if (betAmount != 0) {
      betAmount -= 10;
      betAmountText.text = `Bet: ${betAmount}`;
    }
});

playButton.pixiObj.on("pointerdown", () => {
    creditsAmount -= betAmount;
    creditsAmountText.text = `Credits: ${creditsAmount}`;

    fetch("/playButton", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{\"id\": 0, \"betAmount\": ${betAmount}}`
    })
    .then(winAndResults => winAndResults.json())
    .then(winAndResults => {
      creditsAmount += winAndResults.win;
      creditsAmountText.text = `Credits: ${creditsAmount}`;

      console.log(winAndResults.results)
    })

    betAmount = 0;
    betAmountText.text = `Bet: ${betAmount}`;
});