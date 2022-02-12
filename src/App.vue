<script setup lang="ts">
import { useMb } from './store'
import { STATES } from './types'

const mb = useMb()
</script>

<template>
  <main class="w-full min-w-md min-h-screen flex flex-col justify-start items-center py-10 children:(w-85 bg-gray-900 px-8 py-6 shadow-md text-lg font-medium mb-4)">
    <div class="grid grid-cols-1 gap-2">
      <div v-for="m of mb.pandings" :key="m.id"
           class="grid grid-cols-9 children:(py-2 text-center transition duration-300)">
        <span class="col-span-3 bg-green-400 cursor-default grid place-items-center">
          <span class="block w-75px h-30px leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" :title="m.name">{{ m.name }}</span>
        </span>
        <span class="col-span-2 bg-blue-700 cursor-pointer hover:bg-blue-600"
              @click="mb.setState({ id: m.id, state: STATES.AEEIVE })">到位</span>
        <span class="col-span-2 bg-yellow-700 cursor-pointer hover:bg-yellow-600"
              @click="mb.setState({ id: m.id, state: STATES.LEAVE })">请假</span>
        <span class="col-span-2 bg-red-700 cursor-pointer hover:bg-red-600"
              @click="mb.setState({ id: m.id, state: STATES.ABSENT })">缺勤</span>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-0.5">
      <span v-for="m of mb.arrives" :key="m.id" class="bg-blue-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-blue-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
    </div>

    <div class="grid grid-cols-3 gap-0.5">
      <span v-for="m of mb.leaves" :key="m.id" class="bg-yellow-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-yellow-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
    </div>

    <div class="grid grid-cols-3 gap-0.5">
      <span v-for="m of mb.absents" :key="m.id" class="bg-red-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-red-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
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