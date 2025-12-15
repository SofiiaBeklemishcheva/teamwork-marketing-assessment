import { computed } from 'vue'
export const useChallenges = () => {
  const { data } = useFetch('https://eoyge3duj7xtdqd.m.pipedream.net')

  const tag = computed(() => data.value?.tag || '')
  const title = computed(() => data.value?.title || '')
  const items = computed(() => data.value?.items || [])

  return { tag, title, items }
}