<script setup lang="ts">
import { useMb } from './store'

const mb = useMb()
</script>

<template>
  <main class="w-full min-w-md min-h-screen flex flex-col justify-start items-center py-10">
    <div class="w-85 bg-gray-900 px-8 py-6 grid grid-cols-1 gap-2 shadow-md text-lg font-semibold">
      <div v-for="m of mb.pandings" :key="m.id"
           class="grid grid-cols-9 children:(py-2 text-center transition duration-300)">
        <span class="col-span-3 bg-green-400 cursor-default grid place-items-center">
          <span class="block w-75px h-30px leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" :title="m.name">{{ m.name }}</span>
        </span>
        <span class="col-span-2 bg-blue-700 cursor-pointer hover:bg-blue-600">到位</span>
        <span class="col-span-2 bg-yellow-700 cursor-pointer hover:bg-yellow-600">请假</span>
        <span class="col-span-2 bg-red-700 cursor-pointer hover:bg-red-600">缺勤</span>
      </div>
    </div>
  </main>
</template>

<style>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-dark-700;
  border-radius: 5px;

  &:hover {
    @apply bg-dark-900;
  }
}
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  background: transparent;
}
</style>