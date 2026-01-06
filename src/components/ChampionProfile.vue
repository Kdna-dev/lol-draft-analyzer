<script setup lang="ts">
import { useUserExperienceStore } from '@/stores/ux';
import { NAvatar } from 'naive-ui';
import { computed } from 'vue';
const props = defineProps({
    id: String,
    image: String,
    champName: String,
    selected: Boolean
})

const emit = defineEmits(['select'])

function handleClick() {
    emit('select', props.id)
}

const uxStore = useUserExperienceStore()
const isMobile = computed(() => uxStore.isMobile)
const profileImageSize = computed(() => isMobile ? 48 : 64)

</script>

<template>
    <div class="profile-card" :class="selected" @click="handleClick">
        <n-avatar :src="image" :size="profileImageSize" round/>
        <p v-if="!isMobile">{{ champName }}</p>
    </div>
</template>

<style scoped>
.profile-card{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>