// Wait till the browser is ready to render the game (avoids glitches)
// Übernommen. Brettgröße (4) und Instanzierung des GameManager
// Start des Spiels
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

