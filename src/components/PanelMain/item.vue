<script setup lang="ts">
import { useMbStore } from '../../store'
import { IMember } from '../../types'

const mb = useMbStore()
defineProps<{
  member: IMember,
}>()
</script>

<template>
  <div class="grid grid-cols-9 children:(py-2 text-center transition duration-300)">
    <span class="col-span-3 bg-green-400 cursor-default grid place-items-center">
      <span class="block w-75px h-30px leading-30px truncate" :title="member.name">{{ member.name }}</span>
    </span>
    <span :class="`col-span-2 bg-${g.color}-700 cursor-pointer hover:bg-${g.color}-600`" v-for="g of mb.stateGroup"
          @click="mb.setState({ id: member.id, state: g.state })">{{ g.text }}</span>
  </div>
</template>