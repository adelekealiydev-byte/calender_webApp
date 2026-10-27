<template>
  <div id="calender-entry" class="w-full max-w-sm mx-auto mt-6">
    <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <!-- Input Field -->
      <div class="mb-3">
        <input
          type="text"
          placeholder="New Event Entry"
          v-model="inputEntry"
          @keyup.enter="submitEvent(inputEntry)"
          class="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          :class="error ? 'border-red-400 bg-red-50/30' : 'border-gray-300'"
        />
      </div>

      <!-- Active Day Display -->
      <div class="flex items-center justify-between text-xs text-gray-600 mb-4 px-1">
        <span>Day of event:</span>
        <span class="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {{ titleOfActiveDay }}
        </span>
      </div>

      <!-- Submit Button -->
      <button
        @click="submitEvent(inputEntry)"
        type="button"
        class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer shadow-sm"
      >
        Submit
      </button>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500 text-xs text-center font-medium mt-2">
        You must type something first!
      </p>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js';

export default {
  name: 'CalenderEntry',
  data() {
    return {
      inputEntry: '',
      error: false
    };
  },
  computed: {
    titleOfActiveDay() {
      const activeDay = store.getActiveDay();
      return activeDay ? activeDay.fullTitle : '';
    }
  },
  methods: {
    submitEvent(eventDetails) {
      if (!eventDetails || eventDetails.trim() === '') {
        this.error = true;
        return;
      }

      store.submitEvent(eventDetails.trim());
      this.inputEntry = '';
      this.error = false;
    }
  }
};
</script>
