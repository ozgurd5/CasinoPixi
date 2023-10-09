//KEEPS STATES AND HANDLES EVENTS

//JS doesn't have an enum system so i made my own

/**
 * @member STARTED:   Started but didn't take "credits" from the server
 * @member IDLE:      Ready to play
 * @member PLAYED:    Player pressed play button, waiting respond from server
 * @member ANIMATION: Sever responded, animations playing
 */
const GameStateEnum = {
    "STARTED": 0,
    "IDLE": 1,
    "PLAYED": 2,
    "ANIMATION": 3,
}

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
    3: "ANIMATION",
};

/**
 * Do not directly change this variable, use:
 * @function ChangeGameState
 */
let GameState = GameStateEnum.STARTED; //Default beginning state

const EventHandler = new EventTarget();

/**
 * Use GameStateEnum.IDLE etc. as the parameter
 * @param {GameStateEnum} newGameState 
 */
function ChangeGameState(newGameState) {
    GameState = newGameState;
    
    const gameStateChange = new CustomEvent("gameStateChange", {detail: newGameState});
    EventHandler.dispatchEvent(gameStateChange);
}