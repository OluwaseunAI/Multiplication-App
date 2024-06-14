let num1 = Math.ceil((Math.random()*12))
let num2 = Math.ceil((Math.random()*12))
let container = document.getElementById('container')

const question = `What is ${num1} multiplied by ${num2}?`;

console.log(num1 * num2);

let q = document.querySelector('.questn');
q.textContent = question

let num = document.querySelector('.num')
num.textContent = `${num1} x ${num2} =`

let yourAns = document.getElementById('inputt')
const scoreEl = document.querySelector('.score')
let score = JSON.parse(localStorage.getItem("score"))
let count = JSON.parse(localStorage.getItem("submit"))

if (!score){
  score = 0
}



let submit = document.querySelector('.submit')

  container.addEventListener('click', function getAns (event){

    let submitBtn = event.target;
    const answr = +yourAns.value

    if (submitBtn.textContent === "Submit Answer"){

      const answer = num1 * num2;

      // updateLocalStorageCount()
      count++;
    if (answr === answer){
      num.textContent = `${num1} x ${num2} = ${answer} \u{2705}`

      //updateLocalStorage()
      score++;
      console.log(score)
    } else{
      num.textContent = `${num1} x ${num2} = \u{274C} The answer is ${answer}`;
    }
scoreEl.innerText = `Your score: ${score} / ${count}`
  }
  })

  function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
  }
  function updateLocalStorageCount(){
    localStorage.setItem("count", JSON.stringify(count))
  }
  let next = document.querySelector('.next')
  container.addEventListener('click', setTimeout(function nextQues(){

  let nextBtn = q.textContent
  nextBtn = ''
  nextBtn = `What is ${num1} multiplied by ${num2}?`;

  getAns()
  }, 2000)
  )

//
// ...display tick before NEXT bttn
//  NEXT: keep score's state, change question and clear imput content
//  COUNT:   before refresh, loop to count number of times you've played
//target umber of times submit button is clicked

