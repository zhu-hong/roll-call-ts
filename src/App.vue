<script setup lang="ts">
import { watch } from 'vue'
import { useMbStore } from './store'
import SearchInput from './components/SearchInput.vue'
import PanelMain from './components/PanelMain/index.vue'
import PanelState from './components/PanelState.vue'

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
  <main class="w-full min-w-md min-h-screen flex flex-col justify-start items-center py-10 pr-7px children:(relative w-85 bg-gray-900 px-8 py-6 pt-8 shadow-md text-lg font-medium mb-6)">
    <SearchInput />

    <Transition>
      <PanelMain />
    </Transition>

    <TransitionGroup>
      <PanelState v-for="g of mb.stateGroup" :key="g.state" v-show="g.members.length" :stateGroupItem="g" />
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
  transition: all 0.3s linear;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform-origin: top;
  transform: scaleY(.3);
}
.v-leave-active {
  position: absolute;
  bottom: 0;
}
</style>