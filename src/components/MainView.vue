<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import { NSpace, NInput} from 'naive-ui'
import { NLayout, NLayoutContent, NLayoutSider} from 'naive-ui'
import { useChampionStore } from '@/stores/champion'
import ChampionProfile from '@/components/ChampionProfile.vue'
import ChampionOverview from '@/components/ChampionOverview.vue'
import DraftSection from '@/components/DraftSection.vue'
import { useUserExperienceStore } from '@/stores/ux'

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

const uxStore = useUserExperienceStore()
const isMobile = computed(() => uxStore.isMobile)
</script>

<template>
    <n-layout :has-sider="!isMobile" sider-placement="left">
        <n-layout-header v-if="isMobile" bordered>
            <DraftSection/>
        </n-layout-header>
        <n-layout-sider v-else bordered>
            <DraftSection/>
        </n-layout-sider>
        <n-layout-content>
            <n-layout :has-sider="!isMobile" sider-placement="right">
                <n-layout-header v-if="isMobile" bordered>
                    <n-space vertical style="padding: 0 12px;">
                        <n-input v-model:value="championSearch" type="text" placeholder="Buscar Campeon" />
                        <n-space :wrap="false" class="hide-scrollbar" style="overflow-x: scroll;">
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
                </n-layout-header>
                <n-layout-content>
                    <ChampionOverview v-if="isChampionSelected"/>
                    <div v-else class="placeholder">
                        <h3>Seleccione un campeon</h3>
                    </div>
                </n-layout-content>
                <n-layout-sider v-if="!isMobile" bordered>
                    <n-space vertical style="padding: 12px;">
                        <n-input v-model:value="championSearch" type="text" placeholder="Buscar Campeon" />
                        <n-space :size="[8,8]" class="hide-scrollbar" style="height: calc(100dvh - 172px); overflow-y: scroll;">
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
                </n-layout-sider>
            </n-layout>
        </n-layout-content>
    </n-layout>
</template>

<style scoped>

    .hide-scrollbar::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

    .placeholder {
        padding: 0 12px;
    }
</style>
