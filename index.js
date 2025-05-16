let myClickedImgs = [];
let areImgsCovered = false;

const img1 = document.createElement("img");
img1.src = "styles/images/Elephant.jpg";
img1.alt = "Elephant";

const img2 = document.createElement("img");
img2.src = "styles/images/Elephant.jpg";
img2.alt = "Elephant";

const img3 = document.createElement("img");
img3.src = "styles/images/Monkey.jpg";
img3.alt = "Monkey";

const img4 = document.createElement("img");
img4.src = "styles/images/Monkey.jpg";
img4.alt = "Monkey";

const img5 = document.createElement("img");
img5.src = "styles/images/Perch.jpg";
img5.alt = "Perch";

const img6 = document.createElement("img");
img6.src = "styles/images/Perch.jpg";
img6.alt = "Perch";

function createImg( imgName){
    const img = document.createElement("img");
    img.src = "styles/images/" + imgName + ".jpg";
    img.alt = imgName;
    return img;
}

const [imge1, imge2] = [createImg("Elephant"), createImg("Elephant")];
const [imge3, imge4] = [createImg("Monkey"), createImg("Monkey")];
const [imge5, imge6] = [createImg("Perch"), createImg("Perch")];
console.log(imge1);
console.log(imge3);
console.log(imge5);


function getRndInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function shuffleArrayElts(arr){
    let rndValue = getRndInt(0,5);
    let temp;
    for(let i=0; i<arr.length; i++){
        temp = arr[i];
        arr[i] = arr[rndValue];
        arr[rndValue] = temp;
    }
    return arr;
}

const div = document.getElementById("div1");

function shuffleMyImgs(){
    let myArrayImgs = [imge1, imge2, imge3, imge4, imge5, imge6];
    myArrayImgs = shuffleArrayElts(myArrayImgs);
    for(let i=0; i<myArrayImgs.length; i++){
        div.appendChild(myArrayImgs[i]);
    }
}

shuffleMyImgs();

function removeMyImgs(){
    const myImgs = document.querySelectorAll("img");
    for(let i=0; i<myImgs.length; i++){
        div.removeChild(myImgs[i]);
    }
    console.log(myImgs);
}

function isSameImg(){
    if(myClickedImgs.length == 2){
        const result = document.getElementById("result");
        if(myClickedImgs[0] == myClickedImgs[1]){
            result.innerHTML += " You won! You Choose it correctly";
        }else
        {
            result.innerHTML += " You loose! Try again";
        }
    }else
    {
        result.innerHTML = "Your result will be here";
    }
}

function hideImgs(){

    areImgsCovered = true;

    const myImgs = document.querySelectorAll("img");

    for(let i=0; i<myImgs.length; i++){

        myImgs[i].classList.add("blur");

    }
}

function showImgs(){
    areImgsCovered = false;

    const myImgs = document.querySelectorAll("img");

    for(let i=0; i<myImgs.length; i++){

        myImgs[i].classList.remove("blur");

    }
}

function startTheGame(){
    areImgsCovered = true;
    removeMyImgs();
    shuffleMyImgs();
    hideImgs();
}

function restartTheGame(){
    areImgsCovered = true;
    if(myClickedImgs.length % 2 == 0){

        myClickedImgs.length = 0;
        console.log(myClickedImgs);
        startTheGame();
        result.innerHTML = "Your result will be here";
    }
    //else
    //{
        //alert("start the game first");
    //}
    
}

function checkImgs(){
    
    const myImgs = document.querySelectorAll("img");

    for(let i=0; i<myImgs.length; i++){

        myImgs[i].addEventListener("click", () => {

            if(areImgsCovered && myClickedImgs.length <= 1){
                myImgs[i].classList.remove("blur");
                myClickedImgs.push(myImgs[i].alt);
                console.log(myClickedImgs);
                isSameImg();
            }else
            {
                alert("start the Game First!");
            }
        });
    }
}
checkImgs();

