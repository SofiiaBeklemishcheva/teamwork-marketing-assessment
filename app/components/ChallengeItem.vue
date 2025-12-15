<script setup>

const props = defineProps({
  title: String,
  description: String,
  isActive: Boolean,
  imageUrl: String, 
})

const emit = defineEmits(['toggle']) 

const toggle = () => {
  emit('toggle') 
}
</script>

<template>
  <article class="challenge-container" :class="{ 'is-active': props.isActive }">
    <button
      class="challenge-header"
      @click="toggle"
      :aria-expanded="props.isActive"
      :aria-controls="`challenge-content-${title.replace(/\s/g, '-')}`"
    >
      <h3 class="challenge-title" :class="{ 'is-active': props.isActive }">{{ title }}</h3>

      <BaseIcon
        name="chevron"
        class="icon-arrow" 
        :class="{ 'is-open': props.isActive }" 
      /> 
    </button>

    <div v-if="props.isActive" class="challenge-content" :id="`challenge-content-${title.replace(/\s/g, '-')}`">
      <p>{{ description }}</p>
      <NuxtImg 
        v-if="imageUrl"
        :src="imageUrl"
        alt="Challenge illustration" 
        class="challenge-mobile-image" 
        loading="lazy"
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import './ChallengeItem.scss'; 
</style>