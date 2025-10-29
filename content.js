(() => {
  document.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "Space") {
        console.log("Space pressed");
        event.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();

        let players = document.querySelectorAll("video");
        if (!players.length) {
          console.log("No video elements found");
          return;
        }

        let player = players[0];
        if (player.paused === false) {
          player.pause();
        } else if (player.paused === true) {
          player.play();
        }
      }
    },
    true
  );
})();
