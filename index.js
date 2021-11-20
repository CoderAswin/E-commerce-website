var initCount = 0;

var plus = document.getElementsByTagName("button")[2]
var minus = document.getElementsByTagName("button")[1];
var count = document.querySelector(".plusminus h1");

plus.addEventListener("click",()=>{
    if(initCount < 3 && initCount >= 0){
        initCount++;
        count.textContent = initCount;
    }
});

minus.addEventListener("click",()=>{
    if(initCount <= 3 && initCount > 0){
        initCount--;
        count.textContent = initCount;
    }
});

