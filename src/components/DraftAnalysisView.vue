<script setup lang="ts">
import { useChampionStore } from '@/stores/champion';
import { computed } from 'vue';
import { NCard, NSpace, NAvatar, NButton, NIcon } from 'naive-ui';
import { ArrowBackSharp as ArrowBack } from '@vicons/ionicons5'
import { useUserExperienceStore } from '@/stores/ux';

const championStore = useChampionStore()
const lanes = computed(() => championStore.laneAssignment)

const uxStore = useUserExperienceStore()
function backToDraft() {
    uxStore.showDraftAnalysis = false
}
</script>

<template>
    <n-space justify="space-evenly" class="hide-scrollbar" style="height: calc(100dvh - 188px); overflow-y: scroll; padding: 12px;">
        <n-card v-for="champ in lanes"
            :segmented="{
                content: true,
                footer: 'soft',
            }"
        >
            <n-space vertical align="center">
                <n-avatar :src="champ.profileUrl" :size="64" round/>
                <p>{{ champ.name }}</p>
            </n-space>
            <template #footer>
                #footer
            </template>
        </n-card>
    </n-space>
    <n-space justify="end" style="padding: 12px;">
        <n-button type="info" @click="backToDraft" quaternary>
            <template #icon>
                <n-icon>
                    <ArrowBack />
                </n-icon>
            </template>
            Back to Draft
        </n-button>
    </n-space>
</template>

<style scoped>
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }
</style>