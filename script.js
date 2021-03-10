var playerTurn = 1;
var scorePOne = 0;
var scorePTwo = 0;
var currentScore = 0;


const reset = (e) =>
{
   document.getElementById('POneScore').innerText=0;
   document.getElementById('PTwoScore').innerText=0;

   changeDiceSvg(0);

   playerTurn = 2;
   changeP();

   scorePOne = 0;
   scorePTwo = 0;
   currentScore = 0;
}

const rollDice = (e) =>
{
   /*
      Roll random value (1-6)
      Display value as dice => resultDice
      If value > 1 -> add value to active player current score
      If value = 1 -> active player current score = 0 then change current player
   */
   var random = Math.floor(Math.random() * Math.floor(6)+1);

   if(random == 1)
   {
      /*Lost*/
      currentScore = 0;
      changeP();
   }
   else 
   {
      currentScore = currentScore + random;
      updateCurrentScore(currentScore);
   }
   
   changeDiceSvg(random);
}

const hold = (e) =>
{
   updateScore();
   changeDiceSvg(0);
   
   if (checkVictory() == 0)
   {
      changeP();
   }
}

function changeP(order)
{
   if (playerTurn == 1)
   {
      playerTurn = 2;
      document.getElementById('POneCircle').hidden=true;
      document.getElementById('PTwoCircle').hidden=false;
      changeRectanglePos(2);
   }
   else
   {
      playerTurn = 1;
      document.getElementById('POneCircle').hidden=false;
      document.getElementById('PTwoCircle').hidden=true;
      changeRectanglePos(1);
   }
   
   document.getElementById('POneCurrentScore').innerText=0;
   document.getElementById('PTwoCurrentScore').innerText=0;
}

function changeRectanglePos(pos)
{
   if(pos == 1)
   {
      document.getElementById('colorRectangle').style.left="0%";
   }
   else
   {
      document.getElementById('colorRectangle').style.left="50%";
   }
}

function updateCurrentScore(score)
{
   if (playerTurn == 1)
   {
      document.getElementById('POneCurrentScore').innerText=score;
   }
   else
   {
      document.getElementById('PTwoCurrentScore').innerText=score;
   }
}

function updateScore()
{
   if (playerTurn == 1)
   {
      scorePOne = scorePOne + currentScore;
      document.getElementById('POneScore').innerText = scorePOne;
   }
   else
   {
         scorePTwo = scorePTwo + currentScore;
         document.getElementById('PTwoScore').innerText = scorePTwo;
   }
   currentScore = 0;
}

function checkVictory()
{
   if (scorePOne > 99) 
   {
      alert("P1 won");
      reset();
      return true;
   }
   else if (scorePTwo > 99) 
   {
      alert("P2 won");
      reset();
      return true;
   }
   else return false;
}

function changeDiceSvg(num)
{
   document.getElementById('diceResult1').hidden=true;
   document.getElementById('diceResult2').hidden=true;
   document.getElementById('diceResult3').hidden=true;
   document.getElementById('diceResult4').hidden=true;
   document.getElementById('diceResult5').hidden=true;
   document.getElementById('diceResult6').hidden=true;
   document.getElementById('diceIcon').hidden=true;

   switch(num)
   {
      case 0: document.getElementById('diceIcon').hidden=false; break;
      case 1: document.getElementById('diceResult1').hidden=false; break;
      case 2: document.getElementById('diceResult2').hidden=false; break;
      case 3: document.getElementById('diceResult3').hidden=false; break;
      case 4: document.getElementById('diceResult4').hidden=false; break;
      case 5: document.getElementById('diceResult5').hidden=false; break;
      case 6: document.getElementById('diceResult6').hidden=false; break;
   }
}