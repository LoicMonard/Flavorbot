<template>
  <div id="timer">
    <span>Days : {{leftTime.days}}, hours : {{leftTime.hours}}, minutes: {{leftTime.minutes}}, seconds: {{leftTime.seconds}}</span>
    
    <span v-for="timer in timers" :key="timer.timer">
      {{timer.timer}}
    </span>
    <br>{{timers[0]}}
    
  </div>
</template>

<script>
import Firebase from 'firebase';

const dbConfig = require('../../config/db.js');
const firebase = Firebase.initializeApp(dbConfig);
const database = firebase.database();

let timerRef = database.ref('timer');

export default {
  name: 'timer',
  firebase: {
    timers: timerRef
  },
  data() {
    return {
      finalDate: '',
      leftTime: {
        days: '',
        hours: '', 
        minutes: '',
        seconds: ''
      }
    }
  },
  methods: {
    setDate: function() {
      let now = new Date();
      let launch = new Date(this.finalDate)
      let s = (launch.getTime() - now.getTime())/1000;
      let d = Math.floor(s/86400);
      this.leftTime.days = d;
      s -= d*86400;

      let h = Math.floor(s/3600);
      this.leftTime.hours = h;
      s -= h*3600;

      let m = Math.floor(s/60);
      this.leftTime.minutes = m;
      s -= m*60;

      s = Math.floor(s);
      this.leftTime.seconds = s;
      setTimeout(this.setDate, 1000)
    }
  },
  mounted() {
    this.setDate();
    // firebase.database().ref('timer').push({
    //     timer: 'May 05, 2018 23:30:00'
    // });
  }
}
</script>
