<script>
import { store } from '../../store.js';
import CalenderEvent from './CalenderEvent.vue';

export default {
  name: 'CalenderDay',
  props: ['day'],
  components: {
    CalenderEvent
  },
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    }
  }
}
</script>

<template>
  <div
    class="flex-1 min-w-[120px] flex flex-col border bg-white shadow-sm overflow-hidden cursor-pointer transition-all"
    @click="setActiveDay(day.id)"
  >
    <!-- Day Banner -->
    <div
      class="text-white font-semibold py-2 text-center text-sm tracking-wider uppercase transition-colors"
    >
      {{ day.abbvTitle }}
    </div>

    <!-- Day Details -->
    <div class="p-3 flex-1 flex flex-col gap-2">
      <div class="text-xs font-bold text-gray-500">
        {{ day.id }}
      </div>

      <CalenderEvent v-for="(event, index) in day.events" :key="index" :event="event" :day="day" />
    </div>
  </div>
</template>
