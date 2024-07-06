<script setup>
import { ref } from 'vue'

const text = ref('')
const result = ref('')

const reverseString = () => {
  // Separate letters and numbers, then reverse the letters
  const letters = text.value.match(/[a-zA-Z]/g).reverse().join('');
  const number = text.value.match(/\d+/g).join('');

  result.value = letters + number;
}

const resetFields = () => {
  text.value = ''
  result.value = ''
}
</script>

<template>
  <main class="px-5 py-8">
    <h1 class="text-2xl font-bold text-gray-900">Reverse String</h1>

    <div class="py-2">
      <p class="text-gray-700">
        Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata
        <br>
        Hasil = "EIGEN1"
      </p>
    </div>

    <div class="pt-2 pb-5">
      <label class="block text-gray-700 mb-2" for="input">Input</label>
      <input v-model="text" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4" type="text"
        placeholder="NEGIE1">

      <button class="bg-blue-500 text-white rounded-lg p-3 mr-4" @click="reverseString">Reverse String</button>
      <button class="border border-red-500 border-2 rounded-lg p-3 text-red-700" @click="resetFields">Reset</button>
    </div>

    <p class="p-3 border border-2" v-if="result">
      Result: {{ result }}
    </p>
  </main>
</template>