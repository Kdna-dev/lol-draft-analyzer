<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { NDivider, NLayout, NLayoutSider, NLayoutContent, NButton, NAvatar } from 'naive-ui';
import { useChampionStore } from '@/stores/champion';
const props = defineProps({
    laneName: String
})

const isLaneAssigned = ref(false)
const championStore = useChampionStore()
const laneChampion = computed(() => championStore.laneAssignment?.[props.laneName!] ?? null )

const avatarAssignedSrc = computed(() => props.laneName ? `/Position_Challenger-${props.laneName}.png` : '')
const avatarDefaultSrc = computed(() => props.laneName ? `/${props.laneName}.png` : '')

</script>

<template>
    <n-layout has-sider>
        <n-layout-sider>
            <n-avatar v-if="isLaneAssigned" size="small" :src="avatarAssignedSrc"></n-avatar>
            <n-avatar size="small" :src="avatarDefaultSrc"></n-avatar>
        </n-layout-sider>
        <n-layout-content>
            <n-button v-if="isLaneAssigned" quaternary type="error">
              Remover
            </n-button>
            <n-button v-else quaternary type="success">
                Asignar
            </n-button>
        </n-layout-content>
    </n-layout>
</template>

<style scoped>

</style>