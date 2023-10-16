class ozgurButton {
  constructor(paths, scale, positionX, positionY) {
    //Create sprites from paths
    this.sprites = [];
    paths.forEach((item) => {
      this.sprites.push(PIXI.Texture.from(item));
    });

    //Create button object
    this.pixiObj = PIXI.Sprite.from(this.sprites[0]);

    //Default options
    this.pixiObj.anchor.set(0.5, 0.5);
    this.pixiObj.interactive = true;
    this.pixiObj.cursor = "pointer";

    //Modified options
    this.pixiObj.scale.set(scale, scale);
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;

    EventHandler.addEventListener("gameStateChange", (event) => {
      this.OnGameStateChange(event.detail);
    });

    AnimationTicker.add((deltaTime) => this.PlayAnimation());
    this.spriteIndex = 0;
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
    else this.isAnimated = false;
  }

  PlayAnimation() {
    if (this.isAnimated) {
      this.spriteIndex++;
      this.spriteIndex = this.spriteIndex % 4;
      this.pixiObj.texture = this.sprites[this.spriteIndex];
    }
  }
}
