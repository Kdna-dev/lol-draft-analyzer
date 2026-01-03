<script setup lang="ts">
import { NImage, NGrid, NGi, NDivider } from 'naive-ui';
defineProps({
    title: String,
    image:String,
    description:String
})
</script>

<template>
    <n-divider title-placement="left">{{ title }}</n-divider>
        <n-grid x-gap="8" :cols="3">
        <n-gi>
            <n-image
                width="64"
                :src="image"
            />
        </n-gi>
        <n-gi :span="2">
            {{ description }}
        </n-gi>
    </n-grid>
</template>

<style scoped>
    .n-divider {
        margin: 8px 0;
    }
</style>