class ozgurText {
   constructor(text, styles, positionX, positionY, animationSpeed) {
      //Create text object
      this.styles = styles;
      this.pixiObj = new PIXI.Text(text, this.styles[0]);

      //Default option
      this.pixiObj.anchor.set(0.5, 0.5);

      //Modified options
      this.pixiObj.x = positionX;
      this.pixiObj.y = positionY;
      this.animationSpeed = animationSpeed;

      EventHandler.addEventListener("gameStateChange", event => { this.OnGameStateChange(event.detail); });

      this.isAnimated = false;
      this.ticker = new PIXI.Ticker();
      this.ticker.maxFPS = 1;
      this.ticker.add(deltaTime => this.PlayTextAnimation(deltaTime))
      this.ticker.start();

      this.styleIndex = 0;
      this.timer = 0;
   }

   OnGameStateChange(newGameState) {
      if (newGameState == GameStateEnum.ANIMATION) this.isAnimated = true;
      else this.isAnimated = false;
   }

   PlayTextAnimation(deltaTime) {
      if (this.isAnimated) {

         this.timer += deltaTime;
         console.log(deltaTime);

         this.styleIndex++;
         this.styleIndex = this.styleIndex % 4;
         this.pixiObj.style = this.styles[this.styleIndex];
      }
   }
}