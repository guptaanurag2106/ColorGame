let correct=0;
let score=0;
let round=0;
let count=0;
let tiles=[];
let highScore=0;

for (let i=0; i<6; i++) {
  tiles.push(document.getElementById(i));
}

function update() {
  document.getElementById("highScore").innerHTML="HIGH SCORE: "+highScore;
  document.getElementById("rounddiv").innerHTML="ROUND: "+round;
  document.getElementById("scorediv").innerHTML="SCORE: "+score;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  count=0;
  round++;
  update();
  tiles.forEach( t => {
    t.style.visibility="visible";
    colour=getRandomColor();
    t.style.background=colour;
  });
  correct=Math.floor(Math.random()*6)+1;
  document.getElementById("rgb").innerHTML=tiles[correct].style.background;
}

for (let i=0; i<6; i++){
  tiles[i].addEventListener("click", function () {
    count++;
    if (tiles[i].style.background==tiles[correct].style.background) {
      if (count==1){
        score+=5;
      }
      else if (count==2){
        score+=3;
      }
      else if (count==3){
        score+=1;
        
     }
     if (score>highScore) highScore=score;
      update();
      newGame();
    }
   
    else if (count==3){
      if (score>highScore) highScore=score;
        score=0;
        round=0;
        update();
        newGame();
    }
    else { 
      tiles[i].style.visibility="hidden";
      update();
    }

  });
}

newGame();
