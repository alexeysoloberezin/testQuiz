<template>
  <div
      :class="isActive ? 'border-blue-400' : 'opacity-75'"
      class="bg-white rounded-lg cursor-pointer hover:bg-gray-50 hover:shadow-lg shadow border-2  border-transparent duration-100"
  >
    <div class="max-w-sm rounded  flex gap-2  items-center p-3">
      <img class="w-[50px] h-[50px] fit-cover rounded-full" :src="question.image" :alt="question.text">

      <div class="">
        <div class="font-medium text-base mb-2">{{ question.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';
import {QuizQuestion} from "@/data/quizTypes";

defineProps<{
  question: QuizQuestion,
  isActive: boolean,
}>();

</script>
