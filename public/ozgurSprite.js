class ozgurSprite {
  constructor(paths, scaleX, scaleY, positionX, positionY) {
    //Create sprites from paths
    this.sprites = [];
    paths.forEach((item) => {
      this.sprites.push(PIXI.Texture.from(item));
    });

    //Create sprite object
    this.pixiObj = PIXI.Sprite.from(this.sprites[0]);
    app.stage.addChild(this.pixiObj);

    //Default option
    this.pixiObj.anchor.set(0.5, 0.5);

    //Modified options
    this.pixiObj.scale.set(scaleX, scaleY);
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;

    //Animation Init
    EventHandler.addEventListener("gameStateChange", (event) => {
      this.OnGameStateChange(event.detail);
    });
    AnimationTicker.add((deltaTime) => this.PlayAnimation());
    this.spriteIndex = 0;
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
    else {
      this.isAnimated = false;

      //Turn to the default color when animations are done
      this.spriteIndex = 0;
      this.pixiObj.texture = this.sprites[this.spriteIndex];
    }
  }

  PlayAnimation() {
    if (this.isAnimated) {
      this.spriteIndex++;
      this.spriteIndex = this.spriteIndex % 4;
      this.pixiObj.texture = this.sprites[this.spriteIndex];
    }
  }
}
