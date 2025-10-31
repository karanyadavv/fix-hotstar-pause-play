(() => {
  document.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "Space") {
        console.log("Space pressed");

        let players = document.querySelectorAll("video");
        if (!players.length) {
          console.log("No video elements found");
          return;
        }

        let player = players[0];
        if (!player.paused) {
          player.pause();
        } else {
          player.play();
        }
      }
    },
    true
  );
})();
