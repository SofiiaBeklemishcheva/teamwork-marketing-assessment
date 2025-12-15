<script setup>
defineProps({
  name: String,
})

import Arrow from '~/assets/icons/icon.svg' 

const icons = {
  chevron: Arrow,
}

import { useAttrs } from 'vue'
const attrs = useAttrs()
</script>

<template>
  <span class="icon" aria-hidden="true">
    <component :is="icons[name]" v-bind="attrs" />
  </span>
</template>

<style scoped>
.icon > svg { 
  transition: transform 0.3s ease;
}

.icon > svg.is-open { 
  transform: rotate(180deg);
}
</style>