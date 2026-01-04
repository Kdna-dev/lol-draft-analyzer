<script setup lang="ts">
import LaneComponent from './LaneComponent.vue';

const lanes:string[] = ['TOP', 'JG', 'MID', 'ADC', 'SUP']
</script>

<template>
    <LaneComponent v-for="value in lanes" :lane-name="value"/>
</template>

<style scoped>

</style>