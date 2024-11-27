import { URL, KEY } from './config'

export const State = {
  quiz: [],
  currentQuiz: [],
  quizTotalCount: 0,
}
//loading data from server
export const loadData = async function () {
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
    currentQuiz()
  } catch (e) {
    throw e
  }
}

const currentQuiz = function () {
  State.currentQuiz = State.quiz[0]
}
