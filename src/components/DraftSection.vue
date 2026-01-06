<script setup lang="ts">
import { NButton, NIcon, NSpace } from 'naive-ui';
import { StatsChartSharp as ChartIcon } from '@vicons/ionicons5'
import { useUserExperienceStore } from '@/stores/ux'
import { useChampionStore } from '@/stores/champion';

import LaneComponent from './LaneComponent.vue';
import { computed } from 'vue';

const lanes:string[] = ['TOP', 'JG', 'MID', 'ADC', 'SUP']

const championStore = useChampionStore()
const enableDraftAnalysis = computed(() => championStore.draftComplete)

const uxStore = useUserExperienceStore()
function switchToDraft() {
    uxStore.showDraftAnalysis = true
}
const isMobile = computed(() => uxStore.isMobile)
</script>

<template>
    <div class="lane-container">
        <n-space  style="padding: 12px 0;" justify="space-evenly" :vertical="!isMobile">
            <LaneComponent v-for="value in lanes" :lane-name="value"/>
        </n-space>
        <n-button type="info" @click="switchToDraft" :disabled="!enableDraftAnalysis">
            <template #icon>
                <n-icon>
                    <ChartIcon />
                </n-icon>
            </template>
            Analyze Draft
        </n-button>
    </div>
</template>

<style scoped>
    .lane-container {
        display: flex;
        flex-direction: column;
        padding: 0 12px 12px;
        justify-content: space-between;
        height: -webkit-fill-available;
    }
</style>