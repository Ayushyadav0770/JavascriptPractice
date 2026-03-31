let btnBox = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".reset-btn");
let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

btnBox.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turnO){
            button.innerHTML = "O";
            turnO = false;
        }else{
            button.innerHTML = "X";
            turnO = true;
        }
        button.disabled = true;
         checkWinner();
         
    })
   
})

function checkWinner(){
    for(let pattern of winPatterns){
        let pos1 = btnBox[pattern[0]].innerHTML;
        let pos2 = btnBox[pattern[1]].innerHTML;
        let pos3 = btnBox[pattern[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                btnBox.forEach((button)=>{
                    button.disabled = true;
                })
                
                console.log(pos1, "is winner");
            }
           
        }
    }
}

function resetGame(){
    for(let reset of btnBox){
     reset.innerHTML = "";
     reset.disabled = false;
    }
    
}

resetBtn.addEventListener("click",resetGame);