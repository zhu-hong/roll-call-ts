<script setup lang="ts">
import { watch } from 'vue'
import { useMbStore } from './store'
import { STATES } from './types'

const mb = useMbStore()

const memberStorage = localStorage.getItem('memberStorage')
memberStorage && (mb.$state.members = JSON.parse(memberStorage))

watch(
  () => mb.members,
  (val) => {
    localStorage.setItem('memberStorage', JSON.stringify(val))
  },
  {
    deep: true,
  },
)

const reset = () => {
  document.querySelector('#TopTarget')?.scrollIntoView({  behavior: 'smooth' })
  mb.pandings.length !== mb.members.length && mb.$reset()
  setTimeout(() => {
    localStorage.removeItem('memberStorage')
  }, 0)
}
</script>

<template>
  <div id="TopTarget"></div>
  <main class="w-full min-w-md min-h-screen flex flex-col justify-start items-center py-10 children:(relative w-85 bg-gray-900 px-8 py-6 pt-8 shadow-md text-lg font-medium mb-6)">
    <div class="!p-0">
      <input v-model="mb.key" type="text"
             class="w-full !p-3 !pr-10 !pl-5 bg-transparent text-white outline-none transition focus:(ring-2 ring-purple-600)">
      <span class="absolute top-1/4 right-2 cursor-pointer transform scale-90 transition hover:(scale-110)"
            v-show="mb.key.length"
            @click="mb.resetKey()">❌</span>
    </div>

    <Transition>
      <div class="grid grid-cols-1 gap-2" v-show="mb.pandings.length">
        <TransitionGroup>
          <div v-for="m of mb.pandings" :key="m.id"
              class="grid grid-cols-9 children:(py-2 text-center transition duration-300)">
            <span class="col-span-3 bg-green-400 cursor-default grid place-items-center">
              <span class="block w-75px h-30px leading-30px truncate" :title="m.name">{{ m.name }}</span>
            </span>
            <span :class="`col-span-2 bg-${g.color}-700 cursor-pointer hover:bg-${g.color}-600`" v-for="g of mb.stateGroup"
                  @click="mb.setState({ id: m.id, state: g.state })">{{ g.text }}</span>
          </div>
        </TransitionGroup>
        <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">{{ mb.pandings.length }}</span>
      </div>
    </Transition>

    <TransitionGroup>
      <div class="grid grid-cols-3 gap-0.5" v-for="g of mb.stateGroup" :key="g.state" v-show="g.members.length">
        <TransitionGroup>
          <span v-for="m of g.members" :key="m.id" :class="`bg-${g.color}-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:(bg-${g.color}-600)`">
            <span class="block w-75px h-30px text-center leading-30px truncate" 
            :title="m.name"
            @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
          </span>
        </TransitionGroup>
        <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-sm">
          {{ g.members.length }}
          <span class="text-xs">{{ g.text }}</span>
        </span>
      </div>
    </TransitionGroup>

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

.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
.v-leave-active {
  position: absolute;
}
</style>