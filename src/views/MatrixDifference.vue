<script setup>
import { ref } from 'vue'

const matrix = ref('')
const result = ref(null)

const matrixDifference = () => {
    // Convert to 2D array
    const matrixArray = matrix.value.split('\n').map(row => row.split(' ').map(Number))

    // Check if the matrix is NxN
    const n = matrixArray.length;
    for (let row of matrixArray) {
        if (row.length !== n) {
            alert('Error: The matrix is not NxN.');
            return;
        }
    }

    // Sum the diagonals
    let leftToRightDiagonalSum = 0
    let rightToLeftDiagonalSum = 0

    for (let i = 0; i < matrixArray.length; i++) {
        leftToRightDiagonalSum += matrixArray[i][i]
        rightToLeftDiagonalSum += matrixArray[i][matrixArray.length - i - 1]
    }

    // Calculate the difference
    result.value = leftToRightDiagonalSum - rightToLeftDiagonalSum
}

const resetFields = () => {
    matrix.value = ''
    result.value = null
}
</script>

<template>
    <main class="px-5 py-8">
        <h1 class="text-2xl font-bold text-gray-900">Matrix Difference</h1>

        <div class="py-2">
            <p class="text-gray-700">
                Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN.
            </p>
            <div class="bg-gray-100 p-5 my-5 text-gray-700">
                <p>Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]</p>
                <p>diagonal pertama = 1 + 5 + 9 = 15</p>
                <p>diagonal kedua = 0 + 5 + 7 = 12</p>
                <p class="mt-2">maka hasilnya adalah 15 - 12 = 3</p>
            </div>
        </div>

        <div class="pt-2 pb-5">
            <label class="block text-gray-700 mb-2" for="matrix">Matrix</label>
            <textarea v-model="matrix" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4" type="text"
                placeholder="1 2 3&#10;4 5 6&#10;7 8 9" rows="3"></textarea>

            <button class="bg-blue-500 text-white rounded-lg p-3 mr-4" @click="matrixDifference">Get Result</button>
            <button class="border border-red-500 border-2 rounded-lg p-3 text-red-700"
                @click="resetFields">Reset</button>
        </div>

        <p class="p-3 border border-2" v-if="result != null">
            Result: {{ result }}
        </p>
    </main>
</template>