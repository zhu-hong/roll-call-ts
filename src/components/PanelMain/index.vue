<script setup lang="ts">
import { useMbStore } from '../../store'
import Item from './item.vue'

const mb = useMbStore()
</script>

<template>
  <div class="grid grid-cols-1 gap-2" v-show="mb.pandings.length">
    <TransitionGroup>
      <Item v-for="m of mb.pandings" :key="m.id" :member="m" />
    </TransitionGroup>
    <span class="absolute -top-3 left-3 bg-black text-rose-400 px-4 py-1.5 text-base">{{ mb.pandings.length }}</span>
  </div>
</template>