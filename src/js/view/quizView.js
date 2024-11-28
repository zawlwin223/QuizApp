import { TIMER } from '../config.js'
const timer = document.querySelector('.timer')
const questionTitle = document.querySelector('.questionTitle')
const answersParent = document.querySelector('.answers')
const nextButton = document.querySelector('.nextButton')
let timerCount = TIMER

export let currentQuizNum = 0
export const render = function (quiz) {
  const { question, answers } = quiz
  //rendering question
  questionTitle.textContent = question
  //rendering answers
  const markup = answerMarkup(answers)
  answersParent.insertAdjacentHTML('beforeend', markup)
}

//generating markup for answers options
const answerMarkup = function (answers) {
  const markupArr = Object.entries(answers).map((el) => {
    return el[1] === null ? '' : `<li class="answer">${el[0]} : ${el[1]}</li>`
  })

  return markupArr.join('')
}

export const checkAnswersHandler = function (control) {
  answersParent.addEventListener('click', function (e) {
    if (!e.target.classList.contains('answer')) return
    // Get all <li> elements
    const liElements = Array.from(this.children)
    //get index of clicked li
    const clickedIndex = liElements.indexOf(e.target)
    //send clickIndex to controller to check if answer is right or wrong from model
    const answer = control(clickedIndex)
    changeAnswerUI(answer, e.target)
  })
}
const changeAnswerUI = function (answer, targetLi) {
  answer ? targetLi.classList.add('correct') : targetLi.classList.add('wrong')
}
export const nextButtonHandler = function (control) {
  nextButton.addEventListener('click', function () {
    answersParent.innerHTML = ''
    currentQuizNum++
    control(currentQuizNum)
  })
}

//set timer
export const timerHandler = function (control) {
  setInterval(function () {
    if (timerCount === 0) {
      answersParent.innerHTML = ''
      currentQuizNum++
      control(currentQuizNum, timerCount)
      timerCount = TIMER
      return
    }
    timerCount--
    timer.innerHTML = timerCount
  }, 1000)
}
