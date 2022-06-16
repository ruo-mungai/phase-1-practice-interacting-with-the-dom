
let count=0

setInterval(function(){
    count++;
    updateDisplay();
},1000)


//counter==document.querySelector('#counter').innerHTML;
let counter = document.querySelector('#counter');
let counterMinus= document.querySelector('#minus');
let counterPlus = document.querySelector('#plus');

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
}) ;

function updateDisplay(){
    counter.innerHTML = count;
};

let submit = document.querySelector('#submit');
let input = document.querySelector('#comment-input')
let commentList = document.querySelector('#list');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    const btn=document.createElement('span')
    p.textContent = input.value;
    commentList.appendChild(p);
})
let numLikeCountList = document.querySelector('.likes');
let heartButton = document.querySelector('#heart');
let likeObj = {}
heartButton.addEventListener('click', () => {
    let counterNum = counter.textContent;
    if (!likeObj.hasOwnProperty(counterNum)){
        likeObj[counterNum] = 0
        likeObj[counterNum] += 1
        let li = document.createElement('li');
        li.id = counterNum;
        li.innerHTML = (`${counterNum} has been liked <span>1</span> time`); 
        numLikeCountList.appendChild(li)
    } else { 
        likeObj[counterNum] += 1
        let theLi = document.getElementById(`${counterNum}`);
        theLi.innerHTML = (`${counterNum} has been liked <span>${likeObj[counterNum]}</span> time`)
    }
})

 allbtn=document.querySelectorAll('button')
 const pauseTimer = document.querySelector('#pause')
 const resumeTimer = document.querySelector('#resume')

pauseTimer.addEventListener('click', function(){
     if(pauseTimer.id==="resume"){
      pauseTimer.innerText = "pause"
      pauseTimer.id = "pause"
      
      allbtn.disabled=false
   }else if(pauseTimer.id==="pause"){
   pauseTimer.innerText = 'Resume'
   pauseTimer.id = 'resume'
   allbtn.disabled=true
}
   })

