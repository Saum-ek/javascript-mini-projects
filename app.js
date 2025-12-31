//----------------counter

let plus = document.querySelector(".add");
let minus = document.querySelector(".sub");
let Reset = document.querySelector(".reset");
let counter = document.querySelector(".counter");
let count = 0;
plus.addEventListener("click", () => {
    count++
    counter.innerHTML = count;
});
minus.addEventListener("click", () => {
    count--
    counter.innerHTML = count
})
Reset.addEventListener("click", () => {
    counter.innerHTML = "";
})

//---------------color changing

let bar = document.querySelector(".bar");
bar.addEventListener("click",function(){
    bar.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    
})

//----------------Digital watch

let clock = document.querySelector(".Clock");

function showtime(){

    let now = new Date();
    let hours= now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12? "PM" : "AM" ;
    hours = hours % 12;
    hours = hours ? hours :12 ;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 
    let time = `${hours}:${minutes}:${seconds}:${ampm}`;
    clock.innerHTML = time;
}
setInterval(showtime,1000);

showtime();

//--------------------Quote Generator

let quote = document.querySelector("#Quote");
let btn = document.querySelector("#btn");
function getQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data => {
        quote.innerHTML = data.slip.advice;
    })
    .catch(rej=>{
        quote.innerHTML = "Error in fetching API"
    });
}
btn.addEventListener("click",getQuote);