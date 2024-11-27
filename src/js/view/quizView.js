const timerParent = document.querySelector('.timer')
const questionTitle = document.querySelector('.questionTitle')
const answersParent = document.querySelector('.answers')
const timer = 0
export const render = function (quiz) {
  console.log(quiz)
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
    return el[1] === null ? '' : `<li class="correct">${el[0]} : ${el[1]}</li>`
  })

  return markupArr.join('')
}
