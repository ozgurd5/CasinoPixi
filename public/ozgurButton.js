class ozgurButton {
  constructor(paths, scale, positionX, positionY, animationSpeed) {
    //Create sprites from paths
    this.sprites = [];
    paths.forEach(item => {
      this.sprites.push(PIXI.Texture.from(item));
    });
    
    //Create button object
    this.pixiObj = new PIXI.AnimatedSprite(this.sprites);

    //Default options
    this.pixiObj.anchor.set(0.5, 0.5);
    this.pixiObj.interactive = true;
    this.pixiObj.cursor = "pointer";

    //Modified options
    this.pixiObj.scale.set(scale, scale);
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;
    this.pixiObj.animationSpeed = animationSpeed;

    EventHandler.addEventListener("gameStateChange", event => { this.OnGameStateChange(event.detail) });
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.IDLE) {
      this.pixiObj.interactive = true;
      this.pixiObj.cursor = "pointer";
    }

    else if (newGameState == GameStateEnum.ANIMATION) {
      this.pixiObj.play();
      this.pixiObj.interactive = false;
      this.pixiObj.cursor = "default";
    }

    else {
      this.pixiObj.interactive = false;
      this.pixiObj.cursor = "default";
    }
  }
}