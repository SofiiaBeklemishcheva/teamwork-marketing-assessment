<script setup>
import { ref, computed, onBeforeUpdate } from 'vue'
import ChallengeItem from './ChallengeItem.vue'

defineProps({ items: Array, tag: String, title: String })

const activeIndex = ref(0) 
const challengeRefs = ref([])

const setChallengeRef = (el) => {
    if (el) {
        challengeRefs.value.push(el)
    }
}

onBeforeUpdate(() => {
    challengeRefs.value = []
})

const setActive = (index) => {

  if (activeIndex.value === index) {
    activeIndex.value = 0 
  } else {
    activeIndex.value = index
  }
}

const imageIndex = computed(() => {
    return activeIndex.value
})

const handleKeydown = (event) => {
    const listLength = challengeRefs.value.length
    if (listLength === 0) return

    let nextIndex = activeIndex.value

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault() 
            nextIndex = (activeIndex.value + 1) % listLength
            break
        case 'ArrowUp':
            event.preventDefault() 
            nextIndex = (activeIndex.value - 1 + listLength) % listLength
            break
        case 'Enter':
        case ' ': 
            return 
        default:
            return
    }

    activeIndex.value = nextIndex

    const nextChallengeComponent = challengeRefs.value[nextIndex]

    if (nextChallengeComponent) {
        const nextButton = nextChallengeComponent.$el?.querySelector('button')

        if (nextButton) {
            nextButton.focus()
        }
    }
}

</script>

<template>
  <section class="challenges-container" v-if="items.length" @keydown="handleKeydown">
    <div class="challenges-image">
      <NuxtImg
        :src="items[imageIndex]?.image"
        alt="Challenge illustration"
        class="challenge-image-element"
        width="650"
        height="540"
        loading="lazy"
      />
    </div>

    <div class="challenges-list">
      <p class="challenges-tag">{{ tag }}</p>
      <h2 class="challenges-title">{{ title }}</h2>

      <ChallengeItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.text"
        :is-active="activeIndex === index"
        :image-url="item.image"
        @toggle="setActive(index)"
        :ref="setChallengeRef"
        role="listitem"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './ChallengesList.scss'; 
</style>