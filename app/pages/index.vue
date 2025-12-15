<script setup>
import ChallengesList from '~/components/ChallengesList.vue'
import { useChallenges } from '~/composables/useChallenges'

const { items, tag, title } = useChallenges()
</script>

<template>
  <main class="layout">
    <Suspense>
      <template #default>
        <ChallengesList :items="items" :tag="tag" :title="title"/>
      </template>
      <template #fallback>
        <p>Loading challenges...</p>
      </template>
    </Suspense>
  </main>
</template>
