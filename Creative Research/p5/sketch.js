let song;

function preload() {
  song = loadSound("crimeMusic.mp3");
}
function mouseClicked() {
  song.play();
}
