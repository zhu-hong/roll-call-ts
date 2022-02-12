<script setup lang="ts">
</script>

<template>
  <main class="w-full min-w-2xl min-h-screen"></main>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-gray-500;
  border-radius: 5px;

  &:hover {
    @apply bg-gray-600;
  }
}
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  background: transparent;
}
</style>