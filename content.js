(() => {
  const currentURL = window.location.href;
  console.log("Current URL:", currentURL);
  console.log(window.location.hostname);

  document.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "Space") {
        console.log("Space pressed");
        event.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();

        const players = document.querySelectorAll("video");
        if (!players.length) {
          console.log("No video elements found");
          return;
        }
        console.log("what about here");

        const player = players[0];
        console.log("what about here now?");
        if (player.paused == "true") {
          console.log("are we here");
          player.play();
        } else if (player.paused == "false") {
          console.log("are we here too?");
          player.pause();
        }
      }
    },
    true
  );
})();

// const players = document.querySelectorAll('video');
// console.log(players[0].paused);
// players[0].play()
