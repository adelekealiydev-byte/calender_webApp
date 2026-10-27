import { reactive } from 'vue';
import { seedData } from './seed.js';

export const store = {
  state: reactive({
    seedData
  }),
  getActiveDay() {
    return this.state.seedData.find(day => day.active) || this.state.seedData[0];
  },
  setActiveDay(dayId) {
    this.state.seedData.forEach((dayObj) => {
      dayObj.active = (dayObj.id === dayId);
    });
  },
  submitEvent(eventDetails, dayId = null) {
    const targetDay = dayId
      ? this.state.seedData.find(day => day.id === dayId)
      : this.getActiveDay();

    if (targetDay) {
      targetDay.events.push({ details: eventDetails, edit: false });
    }
  }
};
