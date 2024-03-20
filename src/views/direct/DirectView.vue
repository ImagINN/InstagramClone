<template>
  <main>
    <h1>This is direct page</h1>
    <div x-data="{ showModal: false }">
      <!-- Trigger Button -->
      <button @click="showModal = !showModal"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      <!-- Modal Background -->
      <div v-if="showModal" x-show="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <!-- Modal Content -->
        <div class="bg-white p-8 rounded shadow-md w-1/2">
          <!-- Modal Header -->
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Modal Title</h2>
            <!-- Close Button -->
            <button @click="showModal = !showModal" class="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Modal Body -->
          <p>Modal content goes here...</p>
          <!-- Modal Footer -->
          <div class="mt-8 flex justify-end">
            <button @click="showModal = !showModal"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'DirectView',

  data() {
    return {
      showModal: false,
    }
  }
}
</script>