import {useStorage} from "@vueuse/core";

export type QuizAnswers = Record<string, string | string[]>

export function useQuiz() {
  const answers = useStorage<QuizAnswers>('answers',{});

  const setAnswer = ({ step, answer}: {step: number, answer: string | string[]}) => {
    answers.value[step] = answer
  }

  const validateAnswers = (arr, quizLength) => {
    const values = Object.values(arr)
    return values.length === quizLength ? {
      isValid: true,
      message: ''
    } : {
      isValid: false,
      message: `You need to answer ${quizLength - values.length} more questions`
    }
  }

  return { answers, setAnswer, validateAnswers }
}