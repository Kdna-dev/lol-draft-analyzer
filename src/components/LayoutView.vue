<script setup lang="ts">
import { useUserExperienceStore } from '@/stores/ux';
import MainView from './MainView.vue';
import DraftAnalysisView from './DraftAnalysisView.vue';
import { SunnySharp as LightIcon, MoonSharp as DarkIcon } from '@vicons/ionicons5'
import { NButton, NIcon, NSpace, NH3 } from 'naive-ui';
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader } from 'naive-ui';
import { computed, ref } from 'vue';

const uxStore = useUserExperienceStore()

function switchTheme() {
    uxStore.switchTheme()
}
const isDarkTheme = computed(() => uxStore.isDarkTheme)
const showDraftAnalysis = computed(() => uxStore.showDraftAnalysis)
</script>

<template>
    <n-layout position="absolute">
        <n-space vertical :size="0" justify="space-between">
            <n-layout-header bordered>
                <n-space justify="space-between" align="center">
                    <n-h3 style="margin: 0;">LoL - Draft Analyzer</n-h3>
                    <div>
                        <n-button v-if="isDarkTheme" @click="switchTheme">
                            <template #icon>
                                <n-icon>
                                    <LightIcon />
                                </n-icon>
                            </template>
                            Toggle Light
                        </n-button>
                        <n-button v-else @click="switchTheme">
                            <template #icon>
                                <n-icon>
                                    <DarkIcon />
                                </n-icon>
                            </template>
                            Toggle Dark
                        </n-button>
                    </div>
                </n-space>
            </n-layout-header>
            <n-layout-content>
                <DraftAnalysisView v-if="showDraftAnalysis"/>
                <MainView v-else/>
            </n-layout-content>
            <n-layout-footer bordered>
            Proyecto realizado para el bootcamp de Frontend Moderno de Codigo Facilito por Santiago Cabrera - Kdna.dev
            </n-layout-footer>
        </n-space>
    </n-layout>
</template>

<style scoped>
    .n-layout-header {
        padding: 12px;
    }

    .n-layout-footer {
        padding: 12px;
    }
</style>