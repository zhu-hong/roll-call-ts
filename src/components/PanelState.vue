<script setup lang="ts">
import { STATES, IStateGroutItem } from '../types'
import { useMbStore } from '../store'

const mb = useMbStore()

defineProps<{
  stateGroupItem: IStateGroutItem,
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-0.5">
    <TransitionGroup name="grid">
      <span v-for="m of stateGroupItem.members" :key="m.id" :class="`bg-${stateGroupItem.color}-700 cursor-pointer grid place-items-center py-2 transition duration-300 hover:bg-${stateGroupItem.color}-600`">
        <span class="block w-75px h-30px text-center leading-30px truncate" 
        :title="m.name"
        @click="mb.setState({ id: m.id, state: STATES.PENDING })">{{ m.name }}</span>
      </span>
    </TransitionGroup>
    <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-base">
      {{ stateGroupItem.members.length }}
      <span class="text-xs">{{ stateGroupItem.text }}</span>
    </span>
  </div>
</template>

<style>
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.grid-leave-active {
  position: absolute;
}
</style>