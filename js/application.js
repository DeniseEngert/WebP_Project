// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});


// MHMH
function switch_to_5x5 () {
    //var game;
    //game = new GameManager(feld, KeyboardInputManager(), HTMLActuator(), LocalScoreManager());
    //new GameManager(feld, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    //GameManager.prototype.restart;
    //game.restart();
    
    //window.requestAnimationFrame(function () {
    //new GameManager(5, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    //});
    
    
    var game_container = document.getElementById("game-container");
    game_container.className = "game-container game-size-5x5";
    
    var grid_container = document.getElementById("grid-container");
    grid_container.innerHTML = " \
             <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div>";
        
        
    window.requestAnimationFrame(function () {
    new GameManager(5, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    });
    
}


function switch_to_4x4 () {
    //var game;
    //game = new GameManager(feld, KeyboardInputManager(), HTMLActuator(), LocalScoreManager());
    //new GameManager(feld, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    //GameManager.prototype.restart;
    //game.restart();
    
        
    var game_container = document.getElementById("game-container");
    game_container.className = "game-container game-size-4x4";
    
    var grid_container = document.getElementById("grid-container");
    grid_container.innerHTML = " \
             <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div> \
            <div class=\"grid-row\"> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
                <div class=\"grid-cell\"></div> \
            </div>";
            
        
    window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    });
    
}

