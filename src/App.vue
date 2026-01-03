<script setup lang="ts">
import { ref } from 'vue'

import MainView from './components/MainView.vue'

import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { NConfigProvider} from 'naive-ui'

const theme = ref<GlobalTheme | null>(darkTheme)

</script>

<template>
  <n-config-provider :theme="theme">
    <MainView/>
  </n-config-provider>
</template>

<style scoped></style>
