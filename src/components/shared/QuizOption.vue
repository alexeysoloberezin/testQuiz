<template>
  <div
      :class="type === 'image'
      ? 'grid grid-cols-4 gap-4'
      : 'grid gap-2'"
  >
    <div v-for="quizOption in options" :key="step + '-' + quizOption.id"
         class=""
    >
      <component
          :is="components[type]"
          :key="step + '-' + quizOption.id"
          @click="clickOption(quizOption)"
          :question="quizOption"
          :isActive="isActive(quizOption.id)"
      />
    </div>

    <Button v-if="isLast" :disabled="!multiAnswers?.length" @click="handlerSubmit">
      Finish - send result
    </Button>
    <Button v-else-if="isMulti" :disabled="!multiAnswers?.length" @click="sendOptions">
      Next
    </Button>
  </div>
</template>

<script setup lang="ts">
import {QuizQuestion, quizType} from "@/data/quizTypes";
import { defineProps, ref} from "vue";
import QuizCardImage from "@/components/shared/QuizCardImage.vue";
import {defineEmits} from "vue/dist/vue";
import QuizCardSimple from "@/components/shared/QuizCardSimple.vue";
import Button from "@/components/shared/Button.vue";

const props = defineProps<{
  options: QuizQuestion[],
  activeStep: boolean,
  type: quizType,
  isMulti: boolean,
  isLast: boolean,
  answers: string | string[] | null,
  step: number
}>();
const emits = defineEmits(['click:option', 'submit:sendResult'])

const components = {
  'image': QuizCardImage,
  'simple': QuizCardSimple
}

const multiAnswers = ref<Array<string>>(Array.isArray(props.answers) ? props.answers : props.answers ? [props.answers] : []);

const sendOptions = () => {
  emits('click:option', {
    step: props.step,
    answer: multiAnswers.value
  })
}

const handlerSubmit = () => {
  sendOptions()
  emits('submit:sendResult')
}

const isActive = (quizOptionId) => {
  if(props.isMulti){
    return multiAnswers.value.includes(quizOptionId)
  }

  return props.answers === quizOptionId
}

const clickOption = (option: QuizQuestion) => {
  if(props.isMulti){
    if(multiAnswers.value.includes(option.id)){
      multiAnswers.value = multiAnswers.value.filter(answer => answer !== option.id)
    } else {
      multiAnswers.value.push(option.id)
    }
    return
  }

  emits('click:option', {
    step: props.step,
    answer: option.id
  })
}
</script>

<style scoped>

</style>