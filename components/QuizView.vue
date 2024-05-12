<template>
    <div>
        <h1>{{ quizTitle }}</h1>
        <div v-if="questions.length > 0">
            <div v-for="(question, index) in questions" :key="index">
                <h2>{{ question.title }}</h2>
                <ul>
                    <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
                        <label>
                            <input type="radio" :name="'question-' + index" :value="option"
                                v-model="selectedOptions[index]">
                            {{ option }}
                        </label>
                    </li>
                </ul>
            </div>
            <button @click="submitQuiz">Submit</button>
        </div>
        <div v-else>
            <p>No questions available.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const quizTitle = ref('Quiz Title');
const questions = ref([
    {
        title: 'Question 1',
        options: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
        title: 'Question 2',
        options: ['Option 1', 'Option 2', 'Option 3'],
    },
    // Add more questions here
]);
const selectedOptions = ref([]);

const submitQuiz = () => {
    // Handle quiz submission logic here
};
</script>