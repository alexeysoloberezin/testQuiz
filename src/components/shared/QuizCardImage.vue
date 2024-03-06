<template>
  <div
      :class="isActive ? 'mainBorder' : 'opacity-75'"
      class="bg-white rounded-lg   cursor-pointer hover:bg-gray-50 hover:shadow-lg shadow border-2 border-transparent duration-100"
  >
    <div class="max-w-sm rounded  flex gap-2 justify-between items-center p-3">
      <div class="">
        <div class="font-medium text-base mb-2">{{ question.text }}</div>
      </div>
      <img class="w-[100px] h-[100px] fit-cover rounded-full" :src="question.image" :alt="question.text">
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
