const modus = document.getElementById("modus")
const poeng = document.getElementById("poeng")
const poeng2 = document.getElementById("poeng2")
const fargebytter = document.getElementById("fargebytter")
 
let spiller1 = 0
let spiller2 = 0
let mork = false
 
modus.addEventListener("click", function(){
    mork = !mork

    if(mork == true){
        document.body.className = "mork"
        modus.textContent = "lys modus"
    }else{
        document.body.className = ""
        modus.textContent = "mørk modus"
    }
})
 
document.getElementById("pluss1").addEventListener("click", function(){
    spiller1 = spiller1 + 1
    poeng.textContent = spiller1
})
 
document.getElementById("minus1").addEventListener("click", function(){
    if(spiller1 > 0){
        spiller1 = spiller1 - 1
        poeng.textContent = spiller1
    }
})
 
document.getElementById("pluss2").addEventListener("click", function(){
    spiller2 = spiller2 + 1
    poeng2.textContent = spiller2
})
 
document.getElementById("minus2").addEventListener("click", function(){
 
    if(spiller2 > 0){
        spiller2 = spiller2 - 1
        poeng2.textContent = spiller2
    }
 
})
 
document.getElementById("nullstill").addEventListener("click", function(){
 
    spiller1 = 0
    spiller2 = 0
 
    poeng.textContent = spiller1
    poeng2.textContent = spiller2
 
})
fargebytter.addEventListener("click", function(){
 
    if(document.body.className == "glad"){
        document.body.className = "rolig"
    }else{
        document.body.className = "glad"
    }
 
})