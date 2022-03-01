// Script.js

// HTML ELEMENTS
let calcbtn = document.getElementById("calc-btn")
let sumout = document.getElementById("sum-out")
let nout = document.getElementById("n-out")

// EVENT LISTEN
calcbtn.addEventListener("click", calcsum)
document.getElementById("n-in").addEventListener("input", change)

// Event Func
function calcsum(){
    // Sum integers 1 to 100
    // let total = 0;
    // for (let n=1; n <= nin; n++){
    //     total = total + n;
    // }
    
    let nin = document.getElementById("n-in")
    let n = +nin.value
    if (n<1){
        nin = 1
        n = 1
        alert("NO NEGATIVE NUMBERS")
    }
    nout.innerHTML = n
    let m = n++
    let total = n * m / 2

    sumout.innerHTML = total; 
}

// function change(){
//     let nin = document.getElementById("n-in").value
//     let n = +nin.value
//     if (n<1){
//         nin = 1
//         n = 1
        
//     }
    


