<script setup>
import { ref } from 'vue'

const text = ref('')
const longestWord = ref('')
const characterCount = ref(0)

const findLongestWord = () => {
    // Remove all non-alphabetic characters
    let words = text.value.split(' ')
    words = words.map(word => word.replace(/[^a-z]/gi, ''))

    // Find the longest word
    let longest = ''
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    longestWord.value = longest
    characterCount.value = longest.length
}

const resetFields = () => {
    text.value = ''
    longestWord.value = ''
    characterCount.value = 0
}
</script>

<template>
    <main class="px-5 py-8">
        <h1 class="text-2xl font-bold text-gray-900">Longest Word Finder</h1>

        <div class="py-2">
            <p class="text-gray-700">
                Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata
                dengan panjang yang sama silahkan ambil salah satu.
            </p>
            <div class="bg-gray-100 p-5 my-5 text-gray-700">
                <p>const sentence = "Saya sangat senang mengerjakan soal algoritma"</p>
                <p class="mt-2">longest(sentence) // mengerjakan: 11 characters</p>
            </div>
        </div>

        <div class="pt-2 pb-5">
            <label class="block text-gray-700 mb-2" for="input">Input</label>
            <input v-model="text" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4" type="text"
                placeholder="Saya sangat senang mengerjakan soal algoritma">

            <button class="bg-blue-500 text-white rounded-lg p-3 mr-4" @click="findLongestWord">Find Longest
                Word</button>
            <button class="border border-red-500 border-2 rounded-lg p-3 text-red-700"
                @click="resetFields">Reset</button>
        </div>

        <p class="p-3 border border-2" v-if="longestWord && characterCount">
            Longest Word: {{ longestWord }} - {{ characterCount }} character(s)
        </p>
    </main>
</template>