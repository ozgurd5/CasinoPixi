class ozgurSlot {
  constructor(paths, scaleX, scaleY, positionX, positionY, differenceBetweenSlots) {
    //Create slots from paths
    this.slots = [];
    paths.forEach((item) => {
      this.slots.push(PIXI.Texture.from(item));
    });

    //Create slot object
    this.pixiObj = [];
    this.difference = 0;
    for (let i = 0; i < this.slots.length; i++) {
      //Create sprite object
      this.pixiObj[i] = PIXI.Sprite.from(this.slots[i]);
      app.stage.addChild(this.pixiObj[i]);

      //Default option
      this.pixiObj[i].anchor.set(0.5, 0.5);

      //Scale
      this.pixiObj[i].scale.set(scaleX, scaleY);

      //Position
      this.pixiObj[i].x = positionX;
      this.pixiObj[i].y = positionY + this.difference;
      this.difference += differenceBetweenSlots;
    }

    //Animation Init
    EventHandler.addEventListener("gameStateChange", (event) => {
      this.OnGameStateChange(event.detail);
    });
    SlotTicker.add((deltaTime) => this.PlayAnimation());

    //Counters
    this.movingDownCount = 0;
    this.turnCount = 0;
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
    else this.isAnimated = false;
  }

  //4 slots starts to move down. After they moved one slot down, the one in the bottom, which is the 3rd index, goes to the top and becomes the 0th index.
  PlayAnimation() {
    if (this.isAnimated) {
      //Move slots down
      for (let i = 0; i < this.slots.length; i++) {
        this.pixiObj[i].y += 15;
      }

      //Put the bottom one on top and the 0th index when the top one is in the place of the second one. In other words, when every slot move one slot down.
      if (this.pixiObj[0].y >= 250) {
        this.pixiObj = [this.pixiObj[3], this.pixiObj[0], this.pixiObj[1], this.pixiObj[2]];
        this.pixiObj[0].y = 150;
        this.movingDownCount++;
      }

      //Count turns
      if (this.movingDownCount == 4) {
        this.movingDownCount = 0;
        this.turnCount++;
      }
    }
  }

  StopAnimationManually() {
    this.isAnimated = false;
    this.turnCount = 0;
  }
}
