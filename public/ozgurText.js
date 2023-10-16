class ozgurText {
  constructor(text, styles, positionX, positionY) {
    //Create text object
    this.styles = styles;
    this.pixiObj = new PIXI.Text(text, this.styles[0]);

    //Default option
    this.pixiObj.anchor.set(0.5, 0.5);

    //Modified options
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;

    EventHandler.addEventListener("gameStateChange", (event) => {
      this.OnGameStateChange(event.detail);
    });

    AnimationTicker.add((deltaTime) => this.PlayAnimation());
    this.styleIndex = 0;
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
    else this.isAnimated = false;
  }

  PlayAnimation() {
    if (this.isAnimated) {
      this.styleIndex++;
      this.styleIndex = this.styleIndex % 4;
      this.pixiObj.style = this.styles[this.styleIndex];
    }
  }
}
