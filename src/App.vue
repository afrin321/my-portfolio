<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <div>
        <router-view></router-view>
    </div>
    
</template>

<style scoped>
    .container {
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }
</style>
