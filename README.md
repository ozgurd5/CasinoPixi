# CasinoPixi
Casino Pixi

Casino Pixi is a slot machine game that uses Pixi.js, Node.js and Express.js. Game features colored animations and server-client game logic.

Assets:<br/>
https://cazwolf.itch.io/pixel-slot-machine<br/>
https://www.kenney.nl/assets/pixel-ui-pack

Project Structure:<br/>
public<br/>
-index.html<br/>
-pixi.min.js<br/>
-gameFrontEnd.js<br/>
-gameHandler.js<br/>
-gameAnimation.js<br/>
-gameLogic.js<br/>
-ozgurButton.js<br/>
serverStarter.js<br/>
user-data.json

public: Includes files that will be sent to the client side. Actually only index.html is being sent to the client side.

index.html: Includes every script in public folder and is being sent to the client side.

pixi.min.js: Pixi.js library.

gameFrontEnd.js: Creates sprites and texts that will be manipulated by gameAnimation.js and gameLogic.js.

gameStates.js: Creates PIXI application. Keeps state data, game’s current state and event handler.
 * STARTED:   Game started but didn't take "credits" from the server
 * IDLE:      Ready to play
 * PLAYED:    Player pressed play button, waiting respond from server
 * ANIMATION: Sever responded, animations are playing
 
gameAnimation.js: Handles animations and visual effects over sprites and texts.

gameLogic.js: Responsible for data transfer with the server. Sends player input to the server which is the play button click and bet amount. Receives spin results and current credits from the server. Also manages game states.

ozgurButton.js = Custom class for buttons.

ozgurSprite.js = Custom class for sprites.

server.js: Starts server, sends index.html to the client in the beginning. Generates slots, calculates win situation, calculates win amount and send them to the client side.

user-data.json: TEMPORARY SOLUTION: Holds user data which are id, username, password and credits.

Simple Gameplay Loop:<br/>
* User opens application. index.html and scripts in the public folder are being sent to the client. Game state is STARTED and the game is not playable.
* Client sends it's id and takes the credits from server. Game state is now IDLE and the game is playable.
* User can increase/decrease bet amount which is stored in client side. After player press the play button, bet amount and user id sent to the server side. Game state is PLAYED and game is not playable.
* Server decreses credits by the bet amount and starts generating random numbers, calculates their corresponding symbol according to symbol rates. Example: if generated number is between 0-0.5 then it's cherry because cherry rate is 0.5. If it's between 0.5 and 0.8 then it's bell because bell's rate is 0.3.
* Symbol rates and payouts are set to ~95% RTP.
* Server calculates slot results and if it's a win, it starts calculating win amount according to bet amount and symbol payout. Then increases credits by the win amount. Example: Slot result is cherry-cherry-cherry, bet amount is 20$, cherry rate is 8. User won 160$.
* After those calculations done, server sends results and win amount to the client side so the client can update it's credits amount and play the animations according to slot result. When win amount and slot results arrive to the client side, game state becomes ANIMATON
* In ANIMATION state, game is not playable. Slot spinning animations plays, buttons and texts change colors etc. When animations done, game is back to the IDLE state and it's playable again.
