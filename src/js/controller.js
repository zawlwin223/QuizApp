import * as model from './model.js'
import * as quizView from './view/quizView.js'
const controlRenderQuestion = async function () {
  //load data ;
  await model.loadData()
  //get data
  const { currentQuiz } = model.State
  //render data
  quizView.render(currentQuiz)
}

controlRenderQuestion()

// const quizData = async (url) =>
//   await fetch(url).then((response) => response.json())
