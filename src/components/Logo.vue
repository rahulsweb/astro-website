<template>
<img width="160" alt="Logo" :src="path"></template>
<script setup>
import {ref} from 'vue';
const path=ref('../assets/img/Logo.png');
</script>