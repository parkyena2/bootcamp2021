

//Detecting Button Press

var drumButtons = document.querySelectorAll(".drum");
var drumButtonsLenghth = drumButtons.length;

for (var i = 0; i < drumButtonsLenghth; i++) {    //버튼클릭 이벤트 검사
  drumButtons[i].addEventListener("click", handleClick);
}

function handleClick() {    //버튼이 클릭되면 사운드를 재생하는 함수
  var buttonInnerText = this.textContent;
  makeSound(buttonInnerText);
  buttonAnimation(buttonInnerText);
}

//Detectiing Keyboard Press

document.addEventListener("keydown", handlePress);  //키보드드럼 이벤트 검사

function handlePress(event) {   //키보드가 눌리면 사운드를 재생하는 함수
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {   //눌린 키에 따라 연결할 사운드를 고르는 스위치
  
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default:
      console.log(buttonText);
      break;
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(pressedDone, 100);

  function pressedDone() {
    activeButton.classList.remove("pressed");
  }
}


//Use keydown instead of keypress
//함수를 만들어 문자를 받아 검사하고 그에 따라 스위치를
//통해 올바른 사운드를 재생, 이를 키다운 이벤트 리스너와
//드럼버튼 이벤트리스너에서 호출