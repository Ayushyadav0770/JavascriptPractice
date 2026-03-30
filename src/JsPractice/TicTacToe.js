let btn = document.querySelectorAll(".cell");
let turnO = true

let winningPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]

btn.forEach((button)=>{
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
    for(let pattern of winningPatterns){
        let pos1 = btn[pattern[0]].innerHTML;
         let pos2 = btn[pattern[1]].innerHTML;
          let pos3 = btn[pattern[2]].innerHTML;

          if(pos1 != "" && pos2 != "" && pos3 != ""){
          if(pos1 === pos2 && pos2 === pos3){
          console.log("winner")
          }
    }
    }

    
}