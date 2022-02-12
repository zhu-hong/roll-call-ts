<script setup lang="ts">
import { useMbStore } from '../store'

const mb = useMbStore()
</script>

<template>
  <div class="!p-0">
    <input v-model="mb.key" type="text"
            class="w-full !p-3 !pr-10 !pl-5 bg-transparent text-white outline-none transition focus:(ring-2 ring-purple-600)">
    <span class="absolute top-1/4 right-2 cursor-pointer transform scale-90 transition hover:(scale-110)"
          v-show="mb.key.length"
          @click="mb.resetKey()">❌</span>
  </div>
</template>