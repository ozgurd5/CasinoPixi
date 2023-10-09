//HANDLES ANIMATIONS

EventHandler.addEventListener("gameStateChange", event => {
    console.log("new event: ", ReverseGameStateEnum[event.detail]);
})