<script>
import CalenderWeek from './app/components/CalenderWeek.vue';
import CalenderEntry from './app/components/CalenderEntry.vue';

export default {
  name: 'App',
  components: {
    CalenderWeek,
    CalenderEntry
  }
}
</script>

<template>
  <div id="app" class="min-h-screen bg-neutral-700 flex flex-col items-center justify-center p-6">
    <CalenderWeek />
    <CalenderEntry />
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
