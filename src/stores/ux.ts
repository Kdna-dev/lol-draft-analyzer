import { darkTheme, lightTheme, type GlobalTheme, useOsTheme } from "naive-ui";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useBreakpoints } from '@vueuse/core'

export const useUserExperienceStore = defineStore( 'uxStore', () => {
    const osTheme = useOsTheme()
    const theme = ref<GlobalTheme | null>(osTheme.value === 'dark' ? darkTheme : lightTheme)


    const breakpoints = useBreakpoints({
        mobile: 0,
        tablet: 768,
        desktop: 1024,
    })

    const isMobile = breakpoints.smaller('tablet')

    function switchTheme() {
        theme.value = theme.value?.name == 'dark' ? lightTheme : darkTheme;
    }

    const isDarkTheme = computed(() => theme.value?.name == 'dark' ? true : false )

    const showDraftAnalysis = ref(false)

    return { theme, switchTheme, isDarkTheme, showDraftAnalysis, isMobile }
})