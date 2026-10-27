<script>
    import {store} from '../../store.js';
    import CalenderDay from './CalenderDay.vue';

    export default {
        name : "CalenderWeek",
        data(){
            return {
                sharedState: store.state
            }
        },
        components : {
            CalenderDay
        }
    };

</script>

<template>
    <div id="calender-week" class="container-lg mx-auto">
        <div class="flex gap-2">
            <CalenderDay v-for="day in sharedState.seedData" :key="day.id" :day="day" />
        </div>
    </div>
</template>

<style scoped>
    #calender-week{
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }

</style>