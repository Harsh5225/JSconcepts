const box = document.querySelector("#grid_box");

let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let board_array = new Array(9).fill("E");
function winnerCheck() {
  for (const [val1, val2, val3] of winner) {
    if (
      board_array[val1] == "O" &&
      board_array[val2] == "O" &&
      board_array[val3] == "O"
    ) {
      return true;
    } else if (
      board_array[val1] == "X" &&
      board_array[val2] == "X" &&
      board_array[val3] == "X"
    ) {
      return true;
    }
  }
  return false;
}

let totalTurn=0;
let turn = "O";
const result_ele = document.createElement("p");
function TicTacToe(e) {

  const element = e.target;
 
  if(board_array[e.target.id] == "E"){
    totalTurn++;
    if (turn === "O"  ) {
    element.innerHTML = turn;
    board_array[element.id] = turn;
    if (winnerCheck() === true) {
      console.log("Hurray You win");

      result_ele.innerHTML = `Winner is "${turn}"`;
      document.getElementById("container").appendChild(result_ele);
      box.removeEventListener("click", TicTacToe);
    }
    turn = "X";
  } else if (board_array[e.target.id] == "E") {
    element.innerHTML = turn;
    board_array[element.id] = turn;
    if (winnerCheck() === true) {
      console.log("Hurray You win");
      result_ele.innerHTML = `Winner is  "${turn}"`;
      document.getElementById("container").appendChild(result_ele);
      box.removeEventListener("click", TicTacToe);
    }
    turn = "O";
  }
}
if(totalTurn>=9){
  result_ele.innerHTML = `"Draw Hogaya Bhaiy0"`;
  document.getElementById("container").appendChild(result_ele);
  box.removeEventListener("click", TicTacToe);
}
}

// box.removeEventListener('click',callbackFunction)
box.addEventListener("click", TicTacToe);

const restart_butt=document.getElementById('restart');
restart_butt.addEventListener('click',()=>{
 const block= document.getElementsByClassName('block');
 console.log(Array.from(block));
 
 Array.from(block).forEach((value)=>{
  value.innerHTML="";
 })
 turn="O";
 totalTurn=0;
 board_array=new Array(9).fill('E');
 result_ele.innerHTML="";
 box.addEventListener("click", TicTacToe);

})



