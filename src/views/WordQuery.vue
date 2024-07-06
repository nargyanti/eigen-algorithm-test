<script setup>
import { ref } from 'vue'

const input = ref('')
const query = ref('')
const result = ref('')

const wordQuery = () => {
    // String to array
    const inputArr = input.value.split(',').map(item => item.trim())
    const queryArr = query.value.split(',').map(item => item.trim())

    // Count word in input array
    const count = {};
    inputArr.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });

    // Change count to string array
    result.value = "[" + queryArr.map(item => count[item] || 0).join(', ') + "]"
}

const resetFields = () => {
    input.value = ''
    query.value = ''
    result.value = ''
}
</script>

<template>
    <main class="px-5 py-8">
        <h1 class="text-2xl font-bold text-gray-900">Longest Word Finder</h1>

        <div class="py-2">
            <p class="text-gray-700">
                Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam
                QUERY terdapat pada array INPUT.
            </p>
            <div class="bg-gray-100 p-5 my-5 text-gray-700">
                <p>INPUT = ['xc', 'dz', 'bbb', 'dz']</p>
                <p>QUERY = ['bbb', 'ac', 'dz']</p>
                <p class="mt-2">OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada
                    INPUT, dan kata 'dz' terdapat 2 pada INPUT</p>
            </div>
        </div>

        <div class="pt-2 pb-5">
            <div class="my-3">
                <label class="block text-gray-700 mb-2" for="input">Input</label>
                <input v-model="input" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4" type="text"
                    placeholder="xc, dz, bbb, dz">
            </div>

            <div class="my-3">
                <label class="block text-gray-700 mb-2" for="query">Query</label>
                <input v-model="query" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4" type="text"
                    placeholder="bbb, ac, dz">
            </div>

            <button class="bg-blue-500 text-white rounded-lg p-3 mr-4" @click="wordQuery">Get Result</button>
            <button class="border border-red-500 border-2 rounded-lg p-3 text-red-700"
                @click="resetFields">Reset</button>
        </div>

        <p class="p-3 border border-2" v-if="result">
            Result: {{ result }}
        </p>
    </main>
</template>