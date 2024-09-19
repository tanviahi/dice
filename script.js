// console.log("hey")

const imgEl = document.querySelector("img");
const btnEl = document.querySelector("button");
console.log(imgEl);

function getRandom(){
    return Math.floor(Math.random() *6)+1;
}
function getUrl(){
    let numberWords = ["one","two","three","four","five","six"];
    const ran = getRandom() - 1;
    
    console.log(numberWords[ran]);

    const url = `assets/dice-${numberWords[ran]}.png`;
    return url;
}
imgEl.src = getUrl();

btnEl.addEventListener("click",function(){
    console.log("hii");
    imgEl.src=getUrl();
});

