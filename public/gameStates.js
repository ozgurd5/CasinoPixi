//KEEPS PIXI APP, STATE DATA, CURRENT STATE, ANIMATION TICKER AND EVENT HANDLER

//#region PIXI APP INIT
let app = new PIXI.Application({
  width: 550,
  height: 810,
  antialias: true
});
document.body.appendChild(app.view);
//#endregion

//JS doesn't have an enum system so i made my own

//#region STATE INIT
/**
 * @member STARTED:   Started but didn't take "credits" from the server
 * @member IDLE:      Ready to play
 * @member PLAYED:    Player pressed play button, waiting respond from server
 * @member ANIMATION: Sever responded, animations playing
 */
const GameStateEnum = {
  STARTED: 0,
  IDLE: 1,
  PLAYED: 2,
  ANIMATION: 3
};

/**
 * @member STARTED:   Started but didn't take "credits" from the server
 * @member IDLE:      Ready to play
 * @member PLAYED:    Player pressed play button, waiting respond from server
 * @member ANIMATION: Sever responded, animations playing
 */
const ReverseGameStateEnum = {
  0: "STARTED",
  1: "IDLE",
  2: "PLAYED",
  3: "ANIMATION"
};

/**
 * Do not directly change this variable, use:
 * @function ChangeGameState
 */
let GameState = GameStateEnum.STARTED; //Default beginning state
//#endregion

//#region EVENT HANDLER INIT AND CHANGE GAME STATE FUNCTION
const EventHandler = new EventTarget();

/**
 * Use GameStateEnum.IDLE etc. as the parameter
 * @param {GameStateEnum} newGameState
 */
function ChangeGameState(newGameState) {
  GameState = newGameState;

  const gameStateChange = new CustomEvent("gameStateChange", { detail: newGameState });
  EventHandler.dispatchEvent(gameStateChange);
}
//#endregion

//#region ANIMATION TICKER INIT
const AnimationTicker = new PIXI.Ticker();
AnimationTicker.maxFPS = 1;
AnimationTicker.start();
//#endregion
