<template>
  <div v-if="activeStep" class="relative">
    <ProgressLine
      :from="step - 1"
      :to="quizList.length"
      class="mb-4"
    />
    <Transition name="slide-fade">
      <div :key="step" class="w-full mt-3">
        <h1 class="text-2xl font-semibold mb-4 text-center italic">{{ activeStep.title }}</h1>
        <QuizOption
            :options="activeStep.options"
            :type="activeStep.type"
            :isMulti="activeStep.isMulti"
            :answers="answers[step]"
            :isLast="isLast"
            :step="step"
            @click:option="makeAnswer"
            @submit:sendResult="sendResult"
        />
      </div>
    </Transition>

<!--    <div class="flex gap-2">-->
<!--      <Button-->
<!--          v-if="!isFirst"-->
<!--          @click="prevStep"-->
<!--      >-->
<!--        Prev step-->
<!--      </Button>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import quiz from "@/data/quiz";
import QuizOption from "@/components/shared/QuizOption.vue";
import {useSteps} from "@/composables/stepLogic";
import {useQuiz} from "@/composables/quiz";
import {computed} from "vue";
import Button from "@/components/shared/Button.vue";
import ProgressLine from "@/components/shared/ProgressLine.vue";

const quizList = quiz

const {step, nextStep, prevStep, isLast, isFirst} = useSteps(quizList.length)
const { answers, setAnswer, validateAnswers } = useQuiz()

const activeStep = computed(() => {
  return quizList[step.value - 1]
})

const makeAnswer = (payload) => {
  setAnswer(payload)
  setTimeout(() => {
    nextStep()
  }, 450)
}

const sendResult = () => {
  const {isValid, message} = validateAnswers(answers.value, quizList.length)

  if (!isValid) {
    alert(message)
  }else{
    alert('All answers are correct')
  }
}
</script>

<style scoped>

</style>