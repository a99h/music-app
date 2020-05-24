const sounds = document.querySelectorAll(".app__sound");
const taps = document.querySelectorAll(".app__tap");
const visual = document.querySelector(".app__visual");
const colors = ["aqua", "gold", "lightcoral", "lightgreen", "violett", "teal"]

taps.forEach((app__tap, index) => {
    app__tap.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
    });
});

const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
};
