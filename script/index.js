document.querySelector("button").focus();

//===================Utility functions===========================


//Function to select the key that is being pressed
function play(btn) {
    switch(btn) {
        case "w": sound('sounds/crash.mp3');
        break;
        case "a": sound('sounds/kick-bass.mp3');
        break;
        case "s": sound('sounds/snare.mp3');
        break;
        case "d": sound('sounds/tom-1.mp3');
        break;
        case "j": sound('sounds/tom-2.mp3');
        break;
        case "k": sound('sounds/tom-3.mp3');
        break;
        case "l": sound('sounds/tom-4.mp3');
    }
}

//Function to play the sound
function sound(address) {
    var audio = new Audio(address);
        audio.play();
}


//Function to show animation

function showAnimation(byy) {
    var activeButton = document.querySelector("." + byy);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200)
}




//===================Click'n'Play================================


var buttons = document.getElementsByClassName("drum");

//Setting event listeners on all the buttons
for(var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        play(this.innerHTML);
        showAnimation(this.innerHTML);
    });
}


//====================Press'n'Play================================

//Event Listener is being added on the document
document.addEventListener("keypress", function(event) {
    play(event.key);
    showAnimation(event.key);
});  



