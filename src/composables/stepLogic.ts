import {computed, onMounted, onUnmounted, ref} from "vue";
import {useStorage} from "@vueuse/core";

export function useSteps(maxSteps) {
  const step = useStorage('quiz-step', 1)

  const isLast = computed(() => step.value === maxSteps)
  const isFirst = computed(() => +step.value === 1)

  function nextStep() {
    if(isLast.value) return
    step.value++
  }

  function prevStep() {
    if(isFirst.value) return
    step.value--
  }


  return { step, nextStep, prevStep, isLast, isFirst }
}