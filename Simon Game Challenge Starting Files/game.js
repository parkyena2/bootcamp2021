var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(".btn").click(function (event){ //클릭 시 이벤
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1)
})

$(document).keydown(function (event){
  if(started == false) {
    $("#level-title").text("Level " + level);
    nextSequence()
    started = true;
  }
});


function nextSequence() { //다음단계 패턴 생성 및 저장
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4); //1~3 랜덤숫자 생성
  var randomChosenColor = buttonColors[randomNumber]; //랜덤으로 컬러 선택

  gamePattern.push(randomChosenColor);  //랜덤생성 패턴 저장

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {  //소리재생
  var audioSelect = new Audio("sounds/" + name + ".mp3");
  audioSelect.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length == gamePattern.length){
      setTimeout(nextSequence, 1000);
    }
  }
    else {
      console.log("wrong");
      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();
      $("body").addClass("game-over");
      setTimeout(function(){
      $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restert")
      startOver();
    };
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}