<template>
  <button
      :disabled="disabled"
      :class="disabled ? 'bg-gray-300 cursor-no-drop' : 'focus:ring-2 focus:ring-blue-200 focus:outline-none'"
      type="button"
      class="text-white mt-2 bg-blue-700   font-medium rounded-lg text-sm px-5 py-2.5  ">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps<{
  disabled: boolean,
}>();
</script>

<style scoped>

</style>