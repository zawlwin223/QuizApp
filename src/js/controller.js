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
}

const controlCheckAnswer = function (index) {
  //get answer is right or wrong from model
  const answer = model.checkAnswer(index)
  //change ui if answer is right or wrong
  return answer
}

const controlNextButton = function (quizNum) {
  console.log(quizNum)
  controlRenderQuestion(quizNum)
}
const init = function () {
  controlRenderQuestion(quizView.currentQuizNum)
  quizView.checkAnswersHandler(controlCheckAnswer)
  quizView.nextButtonHandler(controlNextButton)
}

init()
