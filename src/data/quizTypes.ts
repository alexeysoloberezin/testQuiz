export type quizType = 'image' | 'simple'

export type QuizItem = {
  step: number,
  type: quizType,
  isMulti: boolean,
  title: string,
  options: QuizQuestion[],
}

export type QuizAnswer = {
  answers: string[] | string,
}

export type QuizItemWithAnswer = QuizAnswer & QuizItem

export type QuizQuestion = {
  text: string,
  image: string,
  id: string,
}