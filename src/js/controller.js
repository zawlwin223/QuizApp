import * as model from './model.js'
import * as quizView from './view/quizView.js'
const controlRenderQuestion = async function (quizNum) {
  //load data ;
  await model.loadData(quizNum)
  //get data
  const { currentQuiz } = model.State
  console.log(currentQuiz)
  //render data
  quizView.render(currentQuiz)
  //set timer
  quizView.timerHandler(controlTimer)
}

const controlCheckAnswer = function (index) {
  //get answer is right or wrong from model
  const answer = model.checkAnswer(index)
  //change ui if answer is right or wrong
  return answer
}

const changeNext = function (quizNum) {
  if (quizNum === model.State.quizTotalCount) {
    //render final result here
    alert(`Your score is ${model.State.score}`)
    controlRenderQuestion(0)
  }
  //change current data in model
  model.currentQuiz(quizNum)
  //get data
  const { currentQuiz } = model.State
  //render data
  quizView.render(currentQuiz)
}
const controlNextButton = function (quizNum) {
  changeNext(quizNum)
}

const controlTimer = function (quizNum) {
  changeNext(quizNum)
}
const init = function () {
  controlRenderQuestion(quizView.currentQuizNum)
  quizView.checkAnswersHandler(controlCheckAnswer)
  quizView.nextButtonHandler(controlNextButton)
}

init()
