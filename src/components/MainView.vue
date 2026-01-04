<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import {NLayout, NSpace, NInput} from 'naive-ui'
import {NLayoutHeader, NLayoutContent, NLayoutFooter} from 'naive-ui'
import { useChampionStore } from '@/stores/champion'
import ChampionProfile from '@/components/ChampionProfile.vue'
import ChampionOverview from '@/components/ChampionOverview.vue'
import DraftSection from '@/components/DraftSection.vue'

const theme = ref<GlobalTheme | null>(darkTheme)
const championStore = useChampionStore()
onMounted(() => {
    championStore.loadChampionList()
})

const championSearch = ref("")
const championList = computed(() =>
  championStore.championProfiles.filter(c => c.name.toLowerCase().includes(championSearch.value.toLowerCase()))
)
const selectedChampionId = ref<string | null>(null)

function onChampionSelected(id: string) {
  championStore.selectedChampion = null
  selectedChampionId.value = id
}

const isChampionSelected = computed(() => selectedChampionId.value !== null)

watch(selectedChampionId, async (newVal) => {
    if (newVal){
        championStore.selectedChampionId = newVal;
        championStore.loadChampionInfo()
    }
})
</script>

<template>
    <n-layout position="absolute">
        <n-space vertical :size="0" justify="space-between">
            <n-layout-header>
                LoL - Draft Analyzer
            </n-layout-header>
            <n-layout-content>
                <div class="layout">
                    <aside style="background-color: #282828;">
                        <DraftSection/>
                    </aside>
                    <main>
                        <ChampionOverview v-if="isChampionSelected"/>
                        <div v-else class="placeholder">
                            <h3>Seleccione un campeon</h3>
                        </div>
                    </main>
                    <aside style="padding: 12px; background-color: #282828;">
                        <n-space vertical>
                            <n-input v-model:value="championSearch" type="text" placeholder="Buscar Campeon" />
                            <n-space
                                :size="[8,8]"
                                class="hide-scrollbar"
                                style="height: calc(100vh - 159px); overflow-y: scroll;"
                            >
                                <ChampionProfile
                                    v-for="value in championList"
                                    :id="value.id"
                                    :image="value.imageUrl"
                                    :champ-name="value.name"
                                    :selected="value.id === selectedChampionId"
                                    @select="onChampionSelected"
                                />
                            </n-space>
                        </n-space>
                    </aside>
                </div>
            </n-layout-content>
            <n-layout-footer>
            Proyecto realizado para el bootcamp de Frontend Moderno de Codigo Facilito por Santiago Cabrera - Kdna.dev
            </n-layout-footer>
        </n-space>
    </n-layout>
</template>

<style scoped>
    .layout {
        display: grid;
        grid-template-columns: 200px 1fr 25%;
    }

    .n-layout-header {
        padding: 12px;
    }

    .n-layout-footer {
        padding: 12px;
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

    .placeholder {
        padding: 0 12px;
    }
</style>
