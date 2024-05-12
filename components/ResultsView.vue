<template>
    <div>
        <h1>Results</h1>
        <ul>
            <li v-for="result in results" :key="result.id">
                {{ result.name }} - {{ result.score }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const results = ref([
    { id: 1, name: 'John', score: 80 },
    { id: 2, name: 'Jane', score: 90 },
    { id: 3, name: 'Bob', score: 75 },
]);

</script>
