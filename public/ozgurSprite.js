class ozgurSprite {
  constructor(paths, scaleX, scaleY, positionX, positionY, animationSpeed) {
    //Create sprites from paths
    this.sprites = [];
    paths.forEach((item) => {
      this.sprites.push(PIXI.Texture.from(item));
    });

    //Create animated sprite object
    this.pixiObj = new PIXI.AnimatedSprite(this.sprites);

    //Default option
    this.pixiObj.anchor.set(0.5, 0.5);

    //Modified options
    this.pixiObj.scale.set(scaleX, scaleY);
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;
    this.pixiObj.animationSpeed = animationSpeed;

    EventHandler.addEventListener("gameStateChange", event => { this.OnGameStateChange(event.detail); });
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) {
      this.pixiObj.play();
    }
    
    else {
      this.pixiObj.stop();
    }
  }
}