
const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const tryAgain = document.querySelector(".lost")
const drone = document.getElementById("drone")
const swordImg = document.querySelector(".swordimg div img")
const superJumpImg = document.querySelector(".superjumpimg div img")
const dinoImg = document.querySelector("#dino img")
const coin = document.querySelector("#coin")
let numberOf = 0;
let swordLoad = "your_image_url.gif"+"?a="+Math.random();
//MENU 
const menu = document.querySelector(".menu")
document.addEventListener("keydown", function (e) {
    if(e.keyCode == 27 && tryAgain.style.display === "block") {
        tryAgain.style.display = "none";
        menu.classList.remove("off")
        numberOf = 0;
        numberOfPoints.textContent = `Your score is: ${numberOf}`
    }
    
})
document.querySelector(".menu .play").addEventListener("click", function () {
    playAgain()
    menu.classList.add("off")
})
window.addEventListener("keydown", (e)=> {
    if (e.keyCode == 32 && !menu.classList.contains("off")) {
        playAgain()
        menu.classList.add("off")
    }
})
// SKAKANIE
function jump () {
    if (dino.classList.contains("crouch")) {
    }
    else if (tryAgain.style.display === "none") {
    if (!dino.classList.contains("jump") && !dino.classList.contains("superJump")){ 
        dino.classList.remove("crouchTwo")
    dino.classList.add("jump")

    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}
}
}
function crouch () {
    if (dino.classList.contains("jump") && false) {
        }
    else if (tryAgain.style.display === "none") {
    if (!dino.classList.contains("crouch") && !dino.classList.contains("superJump")){ 
        dino.classList.remove("crouchTwo")
        dino.classList.add("crouch")
    // setTimeout(function(){
    //     dino.classList.add("crouch")
    // }, 300)
}
}
}
function crouchTwo (){
    if (dino.classList.contains("jump") && false) {
         }
    else if (tryAgain.style.display === "none") {
    if (dino.classList.contains("crouch") && !dino.classList.contains("superJump")){ 
        dino.classList.remove("crouch")
        dino.classList.add("crouchTwo")
}
}
}

// ŚMIERĆ
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) 
let droneLeft = parseInt(window.getComputedStyle(drone).getPropertyValue("left"))
let isAlive = setInterval(function (){
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) 
let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) 
let droneLeft = parseInt(window.getComputedStyle(drone).getPropertyValue("left")) 
if ((cactusLeft - dinoLeft) < 80 && (cactusLeft - dinoLeft) > 15 && dinoTop >= 280 && tryAgain.style.display === "none" && !dino.classList.contains("sword") && !dino.classList.contains("superJump")) {
    cactus.classList.remove("run-animation")
    drone.classList.remove("fly-animation")
    drone.classList.remove("fly-animation-reverse")
    cactus.style.display = "none !important"
    drone.style.display = "none !important"
    tryAgain.style.display = "block";
    dino.classList.remove("crouch")
    dino.classList.remove("superJump")
    superJumpImg.classList.remove("jumping")
    dino.style.backgroundImage = "url(dino.png)"
    dinoImg.style.display = "none"
    dino.style.left = "550px"
    dinoLeft = 550
    dino.style.transform = "scaleX(1)"
    coin.style.display = "none"
    coin.style.left = "1200px"
} else if ((cactusLeft - dinoLeft) < 80 && (cactusLeft - dinoLeft) > 15 && dinoTop >= 280 && tryAgain.style.display === "none" && (dino.classList.contains("sword") || dino.classList.contains("superJump"))) {
    cactus.classList.remove("run-animation")
    setTimeout(function(){cactus.classList.add("run-animation")}, 300)
}
}, 10)
let isAliveDrone = setInterval(function (){
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) 
    let dinoRight = parseInt(window.getComputedStyle(dino).getPropertyValue("right"))
    let droneRight = parseInt(window.getComputedStyle(drone).getPropertyValue("right")) 
    let droneLeft = parseInt(window.getComputedStyle(drone).getPropertyValue("left")) 
    if ((droneLeft - dinoLeft) < 80 && (droneLeft - dinoLeft) > 15 && dinoTop < 340 && dinoTop > 200 && tryAgain.style.display === "none" && !dino.classList.contains("sword") && !dino.classList.contains("superJump")) {
        drone.classList.remove("fly-animation")
        drone.classList.remove("fly-animation-reverse")
        cactus.classList.remove("run-animation")
        cactus.style.display = "none !important"
        drone.style.display = "none !important"
        tryAgain.style.display = "block";
        dino.classList.remove("crouch")
        dino.classList.remove("superJump")
        superJumpImg.classList.remove("jumping")
        dino.style.backgroundImage = "url(dino.png)"
        dinoImg.style.display = "none"
        dino.style.left = "550px"
        dinoLeft = 550
        dino.style.transform = "scaleX(1)"
        coin.style.display = "none"
        coin.style.left = "1200px"
    } 
    if ((droneLeft - dinoLeft) < 80 && (droneLeft - dinoLeft) > 15 && dinoTop > 200 && tryAgain.style.display === "none" && (dino.classList.contains("sword") || dino.classList.contains("superJump"))) {
        drone.classList.remove("fly-animation")
        drone.classList.remove("fly-animation-reverse")
    }
    if ((droneRight - dinoRight) < 40 && (droneRight - dinoRight) > 10 && dinoTop > 200 && tryAgain.style.display === "none" && (dino.classList.contains("sword") || dino.classList.contains("superJump"))) {
        drone.classList.remove("fly-animation")
        drone.classList.remove("fly-animation-reverse")
    }
    if ((droneRight - dinoRight) < 20 && (droneRight - dinoRight) > 10 && dinoTop < 340 && dinoTop > 200 && tryAgain.style.display === "none" && !dino.classList.contains("sword") && !dino.classList.contains("superJump")) {
    drone.classList.remove("fly-animation")
        drone.classList.remove("fly-animation-reverse")
        cactus.classList.remove("run-animation")
        cactus.style.display = "none !important"
        drone.style.display = "none !important"
        tryAgain.style.display = "block";
        dino.classList.remove("crouch")
        dino.classList.remove("superJump")
        superJumpImg.classList.remove("jumping")
        dino.style.backgroundImage = "url(dino.png)"
        dinoImg.style.display = "none"
        dino.style.left = "550px"
        dinoLeft = 550
        dino.style.transform = "scaleX(1)"
        coin.style.display = "none"
        coin.style.left = "1200px"
    }
    }, 10)

// PUNKTY
let numberOfPoints = document.querySelector(".points")

// PRZEGRANA
var thisShit
var thisShitTwo


SwordImageUrl = "https://media.giphy.com/media/KszyaKqNdZkTmF3Kfi/giphy.gif"
JumpImageUrl = "https://media.giphy.com/media/LcUGXaLi2vBDmZzMD5/giphy.gif"
// swordImg.src = imageUrl;

let restartAnimSword = function () {
    swordImg.src = "";
    swordImg.src = SwordImageUrl;
}
let restartAnimJump = function () {
    superJumpImg.src = "";
    superJumpImg.src = JumpImageUrl;
}

function rechargeSword() {
    restartAnimSword()
thisShit = setTimeout(()=>{
    swordImg.classList.remove("charging")
    swordImg.classList.add("swordCharge")
    }, 10000) }
    function rechargeSuperJump() {
        restartAnimJump()
    thisShitTwo = setTimeout(()=>{
        superJumpImg.classList.remove("chargingJump")
        superJumpImg.classList.add("jumpCharge")
        }, 20000) }
    
    let multiplier = 1
    let points = setInterval(function(){
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) 
        if (menu.classList.contains("off") && document.querySelector(".game").style.display === "block" && tryAgain.style.display === "none") {
            numberOf += multiplier
            numberOfPoints.textContent = `Your score is: ${numberOf}`
            
            // console.log(numberOf)
        }
        }, 100)
        // SKILLE
        var swordTimeout
        swordAnim = "https://media.giphy.com/media/OsSWmdAw0vb8ytMYPx/giphy.gif"
        let restartSwordAnim = function () {
            dino.style.backgroundImage = `none`
            dinoImg.src = "";
            dinoImg.src = swordAnim;
            dinoImg.style.display = "inline-block"
        }
        document.addEventListener("keydown", function (e){
            if(!dino.classList.contains("sword") && e.keyCode == 81 && menu.classList.contains("off") && document.querySelector(".game").style.display === "block" && tryAgain.style.display === "none" && swordImg.classList.contains("swordCharge") && !dino.classList.contains("superJump")) {
                dino.classList.remove("jump", "crouch", "crouchTwo")
                swordImg.classList.remove("swordCharge")   
                restartSwordAnim()
            dino.classList.add("sword")
            setTimeout(function(){dino.classList.remove("sword")},550)
            swordInterval = setTimeout(function(){dino.classList.remove("sword")
            dino.style.backgroundImage = "url(dino.png)"
            dinoImg.style.display = "none"
            rechargeSword()},550)

            // console.log("yess")
            if (dinoLeft < 550) {
                dino.style.transform = "scaleX(-1)"
                turnSwordInterval = setTimeout(function () {
                    dino.style.transform = "scaleX(1)"
                }, 550)
            } else if (dinoLeft >= 550) {
                dino.style.transform = "scaleX(1)"
            }
            }
        })
        jumpAnim = "https://media.giphy.com/media/Mb6uGHdjW6CSGjku53/giphy.gif"
        let restartJumpAnim = function () {
            dino.style.backgroundImage = `none`
            dinoImg.src = "";
            dinoImg.src = jumpAnim;
            dinoImg.style.display = "inline-block"
        }
        var jumpTimeout
        var turnInterval
        var turnSwordInterval
        document.addEventListener("keydown", function (e){
            if(!dino.classList.contains("superJump") && e.keyCode == 69 && menu.classList.contains("off") && document.querySelector(".game").style.display === "block" && tryAgain.style.display === "none" && superJumpImg.classList.contains("jumpCharge") && !dino.classList.contains("sword")) {
                dino.classList.remove("jump", "crouch", "crouchTwo")
                superJumpImg.classList.remove("jumpCharge")   
            superJumpImg.classList.add("jumping")
            dino.classList.add("superJump")
            restartJumpAnim()
            jumpInterval = setTimeout(function(){dino.classList.remove("superJump")
            superJumpImg.classList.remove("jumping")
            dino.style.backgroundImage = "url(dino.png)"
            dinoImg.style.display = "none"
            rechargeSuperJump()},3870)
            // console.log("yess")
            if (dinoLeft < 550) {
                dino.style.transform = "scaleX(-1)"
                turnInterval = setTimeout(function () {
                    dino.style.transform = "scaleX(1)"
                }, 3870)
            } else if (dinoLeft >= 550) {
                dino.style.transform = "scaleX(1)"
            }
            }
        })
         // COIN
var coinTimeout
let coinTime
let coinLeft
function coinSpawn() {
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
    coinTime = Math.floor(Math.random()*18000) + 5000
    coinLeft = (dinoLeft < 550) ? Math.floor(Math.random()*575) + 575 : Math.floor(Math.random()* 575);
    console.log("losowanie")
    clearTimeout(coinTimeout)
    coinTimeout = setTimeout(function () {
    coin.style.left = `${coinLeft}px`
    coin.classList.remove("active")
    console.log("spawn")
    }, coinTime)
}
let coinCheck = setInterval(function (){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) 
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
    let coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"))
    if ((coinLeft - dinoLeft) < 80 && (coinLeft - dinoLeft) > -20 && !coin.classList.contains("active") && dinoTop > 223 && dinoTop < 350) {
        multiplier = 2
        coin.classList.add("active")
        console.log("podniesienie")
        setTimeout(function () {
            console.log("koniec efektu i despawn")
            multiplier = 1
            coin.style.left = "1200px"
            coin.classList.remove("active")
            coinSpawn()
        }, 5000)
        
    }
    }, 10)
    // CLEAR
        function clearThisShit(){
            clearInterval(jumpTimeout)
            clearInterval(turnSwordInterval)
            clearInterval(turnInterval)
            clearTimeout(swordTimeout)
            clearTimeout(thisShit)
            clearTimeout(thisShitTwo)
            clearTimeout(coinTimeout)
        }
       
        // PRZEGRANA
        let dinoLeft = 550
let timePlayAgain = 5000
let timeSwordBing = 5000
let playAgain = function(){
    if(dino.classList.contains("crouch")){
        dino.classList.remove("crouch")
    }
    cactus.classList.add("run-animation")
    tryAgain.style.display = "none";
    numberOf = 0;
    numberOfPoints.textContent = `Your score is: ${numberOf}`
    clearThisShit()
    swordImg.classList.add("swordCharge")
    superJumpImg.classList.add("jumpCharge")
    dino.classList.remove("superJump")
    superJumpImg.classList.remove("jumping")
    dino.style.left = "550px"
    dinoLeft = 550
    dino.style.transform = "scaleX(1)"
    multiplier = 1
    coin.style.display = "block"
    coinSpawn()
}

setInterval(function(){
        if (tryAgain.style.display === "block" || swordImg.classList.contains("swordCharge")) {
            restartAnimSword()}}, 1)

setInterval(function(){
        if (tryAgain.style.display === "block" || superJumpImg.classList.contains("jumpCharge")) {
            restartAnimJump()}}, 1)


window.addEventListener("keydown", (e)=> {
    if (e.keyCode == 32 && tryAgain.style.display === "block") {
        playAgain()
    }
})
document.querySelector(".lost button").addEventListener("click", playAgain)



// ODPAŁ
document.addEventListener("keydown", function (e){
    if ((e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 87) && cactus.classList.contains("run-animation")) {
        jump()
    }
}) 
document.addEventListener("keydown", function (e){
    if ((e.keyCode == 17 || e.keyCode == 40 || e.keyCode == 83) && cactus.classList.contains("run-animation")) {
        crouch()
    }
}) 
document.addEventListener("keyup", function (e){
    if ((e.keyCode == 17 || e.keyCode == 40 || e.keyCode == 83) && cactus.classList.contains("run-animation")) {
        crouchTwo()
    }
})

let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) 
// if (dinoTop === 300 && dino.classList.contains("crouchTwo")){
//     dino.classList.remove("crouchTwo")
// }


let launch = function () {
document.querySelector(".load").style.display = "none";
document.querySelector(".game").style.display = "block";
    
}

document.addEventListener("keydown", function (e){
    if (((e.keyCode == 37) || (e.keyCode == 65)) && cactus.classList.contains("run-animation") && dinoLeft > 0) {
    function goLeft() {
            dinoLeft -= 50
            dino.style.left = dinoLeft + "px" 
    }
    goLeft() 
}}) 
document.addEventListener("keydown", function (e){
    if (((e.keyCode == 39) || (e.keyCode == 68)) && cactus.classList.contains("run-animation") && dinoLeft < 1100) {
    function goRight() {
            dinoLeft += 50
            dino.style.left = dinoLeft + "px" 
    }
    goRight() 
}}) 
// e.keyCode == 82 &&

// ŁADOWANIE
let x =0;
let y =0;
let txt = document.querySelector(".conti")
let txtTwo = document.querySelector(".contiTwo")
let textEffect = "bruh";
let textEffectTwo = "   Execute: C//Ninja Mariusz the game . . . . ."
function animate (){
    if(x < textEffect.length){
        txt.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 1)
    }
    function animateTwo() {
        if(x >= textEffect.length && y < textEffectTwo.length) {
          txtTwo.innerHTML += textEffectTwo.charAt(y);
            y++;
            if(y == textEffectTwo.length) {
                launch()
            }
            setTimeout(animateTwo, 250)
        }
        }
        animateTwo()  
}
animate();

// LOSU LOSU PRZECIWNIKÓW
let randomDirect;
let droneFly = function () {
    if (menu.classList.contains("off") && document.querySelector(".game").style.display === "block" && (tryAgain.style.display === "none" || tryAgain.style.display === "")) {
randomDirect = Math.floor(Math.random()*2)
    if (randomDirect === 0) {
drone.classList.add("fly-animation")
setTimeout(function () {
    drone.classList.remove("fly-animation")
}, 1800)
} else if (randomDirect === 1) {
drone.classList.add("fly-animation-reverse")
setTimeout(function () {
    drone.classList.remove("fly-animation-reverse")
}, 1800)
}
// console.log("fly")
}
}
let i;
let rand = 300;

function randomize() {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusLeft < 680 && cactusLeft > 220) {
   droneFly();
    }
   rand = Math.round(Math.random()*(3000-1500))+1500; 
   clearInterval(i);
   i = setInterval('randomize();', rand);
}

i = setInterval('randomize();', rand);









