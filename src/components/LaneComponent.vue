<script setup lang="ts">
import { computed, ref } from 'vue';
import { NButton, NAvatar, NSpace, NDivider } from 'naive-ui';
import { useChampionStore } from '@/stores/champion';
const props = defineProps({
    laneName: String
})

const championStore = useChampionStore()
const isLaneAssigned = computed(() => Object.keys(championStore.laneAssignment).includes(props.laneName!))
const laneChampion = computed(() => championStore.laneAssignment?.[props.laneName!] ?? null )

const avatarAssignedSrc = computed(() => props.laneName ? `${laneChampion.value?.profileUrl}` : '')
const avatarDefaultSrc = computed(() => props.laneName ? `${props.laneName}.png` : '')

function asignLane() {
    championStore.laneSelector = props.laneName!
    championStore.assignLane()
}

function removeLane () {
    championStore.laneSelector = props.laneName!
    championStore.unassignLane()
}

</script>

<template>
    <n-divider style="margin-bottom: 8px; margin-top: 12px;" title-placement="left">{{ laneName }}</n-divider>
    <n-space>
        <div class="lane-container">
            <n-avatar v-if="isLaneAssigned" :size="64" :src="avatarAssignedSrc"></n-avatar>
            <n-avatar v-else :size="64" :src="avatarDefaultSrc"></n-avatar>
            <n-button v-if="isLaneAssigned" quaternary type="error" @click="removeLane">
              Remover
            </n-button>
            <n-button v-else secondary type="success" @click="asignLane">
                Asignar
            </n-button>
        </div>
        <div class="lane-text">
        </div>
    </n-space>
</template>

<style scoped>
 .lane-container {
    display: flex;
    gap: 12px;
    align-items: center;
    align-content: space-between;
 }
</style>