// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function start2048 (feld){
    var game;
    game = new GameManager(feld, KeyboardInputManager(), HTMLActuator(), LocalScoreManager());
    //new GameManager(feld, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    //GameManager.prototype.restart;
    game.restart();
}
