<script setup lang="ts">
import { useMbStore } from './store'
import { STATES } from './types'

const mb = useMbStore()

mb.$subscribe((_, state) => {
  localStorage.setItem('memberStorage', JSON.stringify(state.members))
})

const memberStorage = localStorage.getItem('memberStorage')
memberStorage && (mb.$state.members = JSON.parse(memberStorage))

const reset = () => {
  document.querySelector('#TopTarget')?.scrollIntoView({  behavior: 'smooth' })
  mb.pandings.length !== mb.members.length && mb.$reset()
  localStorage.removeItem('memberStorage')
}
</script>

<template>
  <div id="TopTarget"></div>
  <main class="w-full min-w-md min-h-screen flex flex-col justify-start items-center py-10 children:(relative w-85 bg-gray-900 px-8 py-6 pt-8 shadow-md text-lg font-medium mb-6)">
    <div class="grid grid-cols-1 gap-2" v-show="mb.pandings.length">
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
      <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">{{ mb.pandings.length }}</span>
    </div>

    <div class="grid grid-cols-3 gap-0.5" v-show="mb.arrives.length">
      <span v-for="m of mb.arrives" :key="m.id" class="bg-blue-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-blue-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
      <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">{{ mb.arrives.length }}</span>
    </div>

    <div class="grid grid-cols-3 gap-0.5" v-show="mb.leaves.length">
      <span v-for="m of mb.leaves" :key="m.id" class="bg-yellow-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-yellow-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
      <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">{{ mb.leaves.length }}</span>
    </div>

    <div class="grid grid-cols-3 gap-0.5" v-show="mb.absents.length">
      <span v-for="m of mb.absents" :key="m.id" class="bg-red-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-red-600)">
        <span class="block w-75px h-30px text-center leading-30px overflow-hidden overflow-ellipsis whitespace-nowrap" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
      <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">{{ mb.absents.length }}</span>
    </div>

    <button class="!bg-purple-800 !w-30 !mb-0 !py-2 font-light tracking-widest transition duration-300 hover:(!bg-purple-700) active:(!bg-purple-900)"
            @click="reset">重置</button>
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