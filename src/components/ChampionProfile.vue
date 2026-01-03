<script setup lang="ts">
    import { NAvatar } from 'naive-ui';
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
</script>

<template>
    <div class="profile-card" :class="selected" @click="handleClick">
        <n-avatar :src="image" :size="64" round/>
        <p>{{ champName }}</p>
    </div>
</template>

<style scoped>
.profile-card{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>