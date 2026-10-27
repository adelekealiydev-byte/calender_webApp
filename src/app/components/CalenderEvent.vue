<template>
  <div
    class="p-2 mb-2 shadow-sm text-xs text-gray-800 border border-black/10 transition-all hover:shadow"
    :style="getEventBackgroundColor"
  >
    <div>
      <span class="block text-center font-medium text-gray-900 mb-1">
        {{ event.details }}
      </span>
      <div class="flex items-center justify-center gap-3 text-gray-600">
        <i class="fa fa-pencil-square cursor-pointer hover:text-blue-600 transition-colors"></i>
        <i class="fa fa-trash-o cursor-pointer hover:text-red-600 transition-colors"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalenderEvent',
  props: ['event', 'day'],
  computed: {
    getEventBackgroundColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    }
  }
}
</script>

