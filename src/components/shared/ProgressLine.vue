<template>
  <div class="gap-2">
    <div class="text-center italic mb-1">
      {{ from }}/{{ to }}
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full duration-400" :style="`width: ${progressBarWidth}%`"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";

const props = defineProps<{
  from: number,
  to: number,
}>();

const progressBarWidth = computed(() => {
  if (props.to === 0) { // Prevent division by zero
    return 0;
  }
  return (props.from / props.to) * 100;
});
</script>

<style scoped>

</style>