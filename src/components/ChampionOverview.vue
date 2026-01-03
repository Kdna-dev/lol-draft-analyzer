<script setup lang="ts">
import { useChampionStore } from '@/stores/champion';
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui';
import { NProgress, NSpace } from 'naive-ui';
import { computed } from 'vue';

const championStore = useChampionStore()

const championDetail = computed(() => championStore.selectedChampionDetail)

function calculePercentage(value:number){
    return (value * 100) / 10
}

</script>

<template>
    <n-layout v-if="championDetail">
        <n-layout-header :style="{ backgroundImage: 'url(' + championDetail.splashUrl + ')' }">
            <h1>{{ championDetail.name }}</h1>
            <h3>{{ championDetail.title }}</h3>
        </n-layout-header>
        <n-layout-content content-style="padding: 12px 0;">
            <n-space vertical>
                <n-progress
                    type="line"
                    status="warning"
                    :percentage="calculePercentage(championDetail.info.attack)"
                    :height="24"
                    border-radius="12px 0 12px 0"
                    fill-border-radius="12px 0 12px 0"
                >
                    Ataque
                </n-progress>
                <n-progress
                    type="line"
                    status="info"
                    :percentage="calculePercentage(championDetail.info.magic)"
                    :height="24"
                    border-radius="12px 0 12px 0"
                    fill-border-radius="12px 0 12px 0"
                >
                    Magia
                </n-progress>
                <n-progress
                    type="line"
                    status="success"
                    :percentage="calculePercentage(championDetail.info.defense)"
                    :height="24"
                    border-radius="12px 0 12px 0"
                    fill-border-radius="12px 0 12px 0"
                >
                    Defensa
                </n-progress>
                <n-progress
                    type="line"
                    status="error"
                    :percentage="calculePercentage(championDetail.info.difficulty)"
                    :height="24"
                    border-radius="12px 0 12px 0"
                    fill-border-radius="12px 0 12px 0"
                >
                    Dificultad
                </n-progress>
            </n-space>
        </n-layout-content>
    </n-layout>
    <p v-else>Cargando campeón...</p>
</template>

<style scoped>
    h1, h3 {
        margin-top: 0;
        z-index: 1;
    }

    .n-layout-header {
        min-height: 240px;
        background-size: cover;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: end;
        padding: 0 12px;
    }

    .n-layout-header::before {
        content: '';
        position: absolute;
        inset: 0;

        background: linear-gradient(
            to top,
            rgba(10, 15, 30, 0.95) 0%,
            rgba(10, 15, 30, 0.65) 55%,
            rgba(10, 15, 30, 0.2) 70%,
            transparent 100%
        );

        z-index: 0;
    }
</style>