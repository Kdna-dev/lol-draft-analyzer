<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { NConfigProvider} from 'naive-ui'
import LayoutView from './components/LayoutView.vue'
import { useUserExperienceStore } from './stores/ux'

const uxStore = useUserExperienceStore()
const theme = computed<GlobalTheme | null>(() => uxStore.theme || darkTheme)

</script>

<template>
  <n-config-provider :theme="theme">
    <LayoutView/>
  </n-config-provider>
</template>

<style scoped></style>
