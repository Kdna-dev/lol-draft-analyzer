<script setup lang="ts">
import { useChampionStore } from '@/stores/champion';
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui';
import { NProgress, NSpace } from 'naive-ui';
import { computed } from 'vue';
import SkillView from '@/components/SkillView.vue'

const championStore = useChampionStore()

const championDetail = computed(() => championStore.selectedChampionDetail)

function calculePercentage(value:number){
    return (value * 100) / 10
}

async function getImage(value:string){
    return await championStore.getSpellImage(value);
}

</script>

<template>
    <div class="hide-scrollbar" style="height: calc(100vh - 161px); overflow-y: scroll;">
        <n-layout v-if="championDetail" >
            <n-layout-header :style="{ backgroundImage: 'url(' + championDetail.splashUrl + ')' }">
                <h1>{{ championDetail.name }}</h1>
                <h3>{{ championDetail.title }}</h3>
            </n-layout-header>
            <n-layout-content
                content-style="padding: 12px 0;"
            >
                <n-space vertical :size="2">
                    <n-progress
                        type="line"
                        status="warning"
                        :percentage="calculePercentage(championDetail.info.attack)"
                        :height="12"
                        border-radius="6px 0 6px 0"
                        fill-border-radius="6px 0 6px 0"
                    >
                        Ataque
                    </n-progress>
                    <n-progress
                        type="line"
                        status="info"
                        :percentage="calculePercentage(championDetail.info.magic)"
                        :height="12"
                        border-radius="6px 0 6px 0"
                        fill-border-radius="6px 0 6px 0"
                    >
                        Magia
                    </n-progress>
                    <n-progress
                        type="line"
                        status="success"
                        :percentage="calculePercentage(championDetail.info.defense)"
                        :height="12"
                        border-radius="6px 0 6px 0"
                        fill-border-radius="6px 0 6px 0"
                    >
                        Defensa
                    </n-progress>
                    <n-progress
                        type="line"
                        status="error"
                        :percentage="calculePercentage(championDetail.info.difficulty)"
                        :height="12"
                        border-radius="6px 0 6px 0"
                        fill-border-radius="6px 0 6px 0"
                    >
                        Dificultad
                    </n-progress>
                </n-space>
                <n-space>
                    <SkillView
                        v-for="value in championDetail.spells"
                        :title="value.name"
                        :image="championDetail.dictSpellImages[value.image.full]"
                        :description="value.description"
                    />
                </n-space>
            </n-layout-content>
        </n-layout>
        <p v-else>Cargando campeón...</p>
    </div>
</template>

<style scoped>
    h1, h3 {
        margin-top: 0;
        margin-bottom: 6px;
        z-index: 2;
    }

    .n-layout-header {
        min-height: 200px;
        background-size: cover;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: end;
        padding: 0 12px;
        position: relative;
    }

    .n-layout-header::before {
        content: '';
        position: absolute;
        inset: 0;

        background: linear-gradient(
            to top,
            rgba(10, 15, 30, 0.95) 0%,
            rgba(10, 15, 30, 0.4) 30%,
            rgba(10, 15, 30, 0.2) 70%,
            transparent 100%
        );

        z-index: 1;
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

</style>