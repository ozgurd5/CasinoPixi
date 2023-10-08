class ozgurButton {
  constructor(path, scale, positionX, positionY) {
    //Create button object
    this.pixiObj = PIXI.Sprite.from(path);

    //Default options
    this.pixiObj.anchor.set(0.5, 0.5);
    this.pixiObj.interactive = true;
    this.pixiObj.cursor = "pointer";

    //Modified options
    this.pixiObj.scale.set(scale, scale);
    this.pixiObj.x = positionX;
    this.pixiObj.y = positionY;
  }
}