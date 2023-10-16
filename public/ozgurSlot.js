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
  }

  OnGameStateChange(newGameState) {
    if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
    else this.isAnimated = false;
  }

  //TODO: EXPLAIN
  PlayAnimation() {
    if (this.isAnimated) {
      for (let i = 0; i < this.slots.length; i++) {
        this.pixiObj[i].y += 15;
      }

      if (this.pixiObj[2].y >= 450) {
        this.pixiObj = [this.pixiObj[3], this.pixiObj[0], this.pixiObj[1], this.pixiObj[2]];
        this.pixiObj[0].y = 150;
      }
    }
  }
}
