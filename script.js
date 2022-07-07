//slecting al required elements
const selectBox = document.querySelector(".selectionbox"),
selectXBtn = selectBox.queySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

window.onload = () =>{ //once window is loaded
    for (let i = 0; i< allBox.length; i++){ //add onClick attribute in all available section's spans
        allBox[i].setAttribute("onClick","clickedBox(this)");
    }

    selectXBtn.onClick =() =>{
        selectBox.classList.add("hide"); //hide the select box on playerX button clicked
        playBoard.classList.add("show"); //show the playboard section on playerX button clicked
    }
    selectOBtn.onClick = () =>{
        selectBox.classList.add("hide");//hide the select box on playerO button clicked
        playBoard.classList.add("show");//show the playboard selection on playerO button clicked
        players.setAttribute("class", "players active player");
    }
}

let playerXIcon = "fas fa-times",//class name of fontawesome cross icon
let playerOIcon = "fas fa-circle",//class name for fontawesome circle icon
playerSign = "X",
runBot = true;

//user click function
function clickedBox(element){
    if(players.classList.contains("")){
        playerSign = "0";
        element.innerHTML = '<i class = "${playerOIcon}"></i>';//adding circle icon tag inside user clicked element.
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML = '<i class="${playerXIcon}"></i>';//adding cross icon tag inside user clicked element.
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none"; //once user selects any box then that box can't be selected again.
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = ((Math.random() * 1000) +200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}

//bot click function
function bot(){
    let array = [];//creating an empty array....we'll store unselected box index in this array
    if(runBot){
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++){
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
    }
    for (let i = 0; i< allBox.length; i++){
        if(allBox[i].childElementCount == 0){//if span has no chid element
            array.push(i);//inserting unclicked or unselected boxes inside array means thatspan has no children
            console.log(i + "" + "has no children");
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(players.classList.contains("player")){
        playerSign = "X";
        allBox[randomBox].innerHTML = `<i class = "${playerXIcon}"></i>`;
        allBox[randomBox].setAttribute("id", playerSign);
        players.classList.add("active");
    }else{
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
    }
    selectWinner();
}
allBox[randomBox].style.pointerEvents = "none";
playBoard.style.pointerEvents = "auto";
playerSign = "X";
}
}

function getidVal (classname){
    return document.querySelector(".box" + classname).id;
}
function checkIdSign(val1, val2, val3, sign){
    if(getidVal(val1) == sign && getIdVal (val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}