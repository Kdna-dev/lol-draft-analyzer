import { ref, computed } from "vue"
import { defineStore } from 'pinia'
import { getChampions, getChampionInfo, getChampionProfilePicture } from "../api/ddragon.api"
import { ChampionDetail, ChampionProfileDTO, type ChampionDTO, type ChampionDetailDTO } from "@/models/champion/index"


export const useChampionStore = defineStore('championStore', () =>{
    const champions = ref<Record<string, ChampionDTO> | null>(null)
    const selectedChampion = ref<ChampionDetailDTO | null>(null)
    const selectedChampionId = ref("")

    async function loadChampionList(){
        var result = await getChampions()
        champions.value = result.data
    }

    async function loadChampionInfo(){
        var champion = await getChampionInfo(selectedChampionId.value)
        selectedChampion.value = champion.data[selectedChampionId.value]
    }

    const championKeys = computed (() => {
        if (!champions.value) return [];
        return Object.keys(champions.value)
    })

    const championProfiles = computed(() => {
      if (!champions.value) return []; // Verificación de null para robustez
      const champs = champions.value; // Cachear para evitar accesos repetidos
      return championKeys.value
        .filter(element => champs[element]) // Filtrar solo elementos que existen
        .map(element => new ChampionProfileDTO(
          champs[element]!.id,
          champs[element]!.name,
          getChampionProfilePicture(element)
        ));
    });

    const selectedChampionDetail = computed(() => {
        return selectedChampion.value ? new ChampionDetail(selectedChampion.value) : null;
    })

    return {
      champions,
      selectedChampionId,
      selectedChampion,
      loadChampionList,
      championKeys,
      loadChampionInfo,
      championProfiles,
      selectedChampionDetail
    };
})
