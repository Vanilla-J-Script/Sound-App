//FUNCTION TO CONNECT SOUND TO THE DIFFERENT CASES
function soundControl(currentCase) {
  switch (currentCase) {
    case "Air":
      var Air = new Audio('sounds/mixkit-air-woosh-1489.wav');
      Air.play();
      break;
    case "a":
      var Air = new Audio('sounds/mixkit-air-woosh-1489.wav');
      Air.play();
      break;

    case "Bird":
      var Bird = new Audio('sounds/mixkit-bird-singing-and-flapping-wings-2432.wav');
      Bird.play();
      break;
    case "b":
      var Bird = new Audio('sounds/mixkit-bird-singing-and-flapping-wings-2432.wav');
      Bird.play();
      break;

    case "Cat":
      var Cat = new Audio('sounds/mixkit-angry-cartoon-kitty-meow-94.wav');
      Cat.play();
      break;
    case "c":
      var Cat = new Audio('sounds/mixkit-angry-cartoon-kitty-meow-94.wav');
      Cat.play();
      break;

    case "Dog":
      var Dog = new Audio('sounds/mixkit-dog-barking-twice-1.wav');
      Dog.play();
      break;
    case "d":
      var Dog = new Audio('sounds/mixkit-dog-barking-twice-1.wav');
      Dog.play();
      break;

    case "Electric":
      var snare = new Audio('sounds/mixkit-electricity-static-power-up-2600.wav');
      snare.play();
      break;
    case "e":
      var snare = new Audio('sounds/mixkit-electricity-static-power-up-2600.wav');
      snare.play();
      break;

    case "Fart":
      var crash = new Audio('sounds/mixkit-cartoon-strong-fart-3050.wav');
      crash.play();
      break;
    case "f":
      var crash = new Audio('sounds/mixkit-cartoon-strong-fart-3050.wav');
      crash.play();
      break;

    case "Gun":
      var kick = new Audio('sounds/mixkit-shotgun-long-pump-1666.wav');
      kick.play();
      break;
    case "g":
      var kick = new Audio('sounds/mixkit-shotgun-long-pump-1666.wav');
      kick.play();
      break;
  
    case "Horn":
      var Horn = new Audio('sounds/mixkit-car-horn-718.wav');
      Horn.play();
      break;
    case "h":
      var Horn = new Audio('sounds/mixkit-car-horn-718.wav');
      Horn.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

//LISTENING FOR BUTTON CLICKS
var itemsNo = document.querySelectorAll(".items").length;
for (var i=0; i<itemsNo; i++) {
  document.querySelectorAll(".items")[i].addEventListener("click", function () {
      var buttonInnerHtml = this.innerHTML;
      soundControl(buttonInnerHtml);  
  });
}


//LISTENING FOR KEYPRESSES
document.addEventListener("keypress", function (event) {
  soundControl(event.key);
});

  

 

  

  



