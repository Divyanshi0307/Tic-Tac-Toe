let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//player o
//let arr = ["apple", "banana" , "litchi"];
let moves = 0;


// 2d array 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    moves = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
   box.addEventListener("click", () => {
      console.log("box was clicked");
    //   box.innerText = "ABCD";
    if(turnO)   //player O
    {
        box.innerText = "O";
        turnO = false;
    }else{  // player X
        box.innerText = "X";
        turnO = true;
    }

    box.disabled = true;
    checkWinner();
    moves++;
    // check condition of draw
    if(moves === 9)
    {
      showDraw();
    }
   });
});

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const showDraw = () =>{
    msg.innerText = "Game Draw! Reset the game";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) =>{
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val == pos2Val && pos2Val == pos3Val)
            {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);





















































