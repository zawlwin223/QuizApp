import { URL, KEY } from './config'

export const State = {
  quiz: [],
  currentQuiz: [],
  quizTotalCount: 0,
}
//loading data from server
export const loadData = async function (index) {
  try {
    const res = await fetch(`${URL}?apiKey=${KEY}&limit=10`)
    const data = await res.json()
    data.forEach((quiz) => {
      State.quiz.push({
        answers: quiz.answers,
        category: quiz.category,
        correct_answer: quiz.correct_answer,
        correct_answers: quiz.correct_answers,
        description: quiz.description,
        difficulty: quiz.difficulty,
        explanation: quiz.explanation,
        id: quiz.id,
        multiple_correct_answers: quiz.multiple_correct_answers,
        question: quiz.question,
        tags: quiz.tags,
        tip: quiz.tip,
      })
    })
    State.quizTotalCount = data.length
    console.log(State)
    currentQuiz(index)
  } catch (e) {
    throw e
  }
}

export const currentQuiz = function (index) {
  if (State.quiz.length === 0) return
  State.currentQuiz = State.quiz[index]
  console.log(State)
}

//return answer ture or false
export const checkAnswer = (data) => {
  console.log(data)
  const answer = Object.entries(State.currentQuiz.correct_answers)[data][1]
  return answer
}
