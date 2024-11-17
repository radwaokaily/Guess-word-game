const inputsContainerElm=document.querySelector(".inputs")
const paragraphDiscElm=document.querySelector(".disc")
const countNumber=document.querySelector(".guess-count")
const resetBtn=document.querySelector(".btn")
const inputTypingElm=document.querySelector(".typeing")
const succussSound= new Audio("../audio/succ.mp3")
const loserSound= new Audio("../audio/loser.mp3")
// console.log(inputTypingElm)
//Words To Guess
const wordsToGuess=[
    {
      word: "react",
      disc: "JavaScript library",
    },
    {
      word: "vue",
      disc: "JavaScript Framework",
    },
    {
      word: "angular",
      disc: "JavaScript MVW Framework",
    },
    {
      word: "nodejs",
      disc: "JavaScript runtime environment",
    },
    {
      word: "php",
      disc: "general-purpose scripting language",
    },
    {
      word: "ruby",
      disc: "open source programming language",
    },
    {
      word: "python",
      disc: "Programming Language",
    },
    {
      word: "tailwind",
      disc: "A utility-first CSS framework",
    },
    {
      word: "bootstrap",
      disc: "world's most famous free CSS framework",
    },
  ];
let word,maxGuess=12,countToWin=[]
document.addEventListener("keydown",()=>inputTypingElm.focus())

inputTypingElm.addEventListener("input",startGame)
//Random Word Function
function getRandomWord(){
    let randomObject=wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)]
    // console.log(randomObject)
    let disc=randomObject.disc
    word=randomObject.word 
    paragraphDiscElm.innerHTML=disc
    countNumber.innerHTML=maxGuess
    let inputs=""
    for(let i=0;i<word.length;i++)
    {
        inputs +=`<input disabled type="text" />`
        inputsContainerElm.innerHTML=inputs
    }
}
getRandomWord()
//start game function
function startGame(e){
    let char=e.target.value
    // console.log(char)
    if(!char.match(/[a-z]/i)) return 
    if(word.includes(char)){
        // console.log(word,char)
    for(let i=0;i<word.length;i++){
        if(word[i]===char && !inputsContainerElm.querySelectorAll("input")[i].value ){
            inputsContainerElm.querySelectorAll("input")[i].value = char;
            countToWin.push(char);
        }
             
    }
    }
    else{
        maxGuess--
    }
    countNumber.innerText=maxGuess
    inputTypingElm.value=''
    
    //winner
    if(countToWin.length===word.length){
        countToWin=[]
        succussSound.play()
    }
    setTimeout(()=>{
        if(maxGuess==0){
        loserSound.play()
        for(let i=0;i<word.length;i++){
            inputsContainerElm.querySelectorAll("input")[i].value =word[i]
        }
    }
    })
    
}
// resetBtn.addEventListener("click",getRandomWord)
// getRandomWord()