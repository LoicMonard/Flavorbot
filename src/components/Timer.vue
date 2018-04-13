<template>
  <div id="timer">
    <div class="days">
      <span>{{leftTime.days}}</span><br>
      <span>DAYS</span>
    </div>
    <div class="hours">
      <span>{{leftTime.hours}}</span><br>
      <span>HOURS</span>
    </div>
    <div class="minutes">
      <span>{{leftTime.minutes}}</span><br>
      <span>MINUTES</span>
    </div>
    <div class="seconds">
      <span>{{leftTime.seconds}}</span><br>
      <span>SECONDS</span>
    </div>
    
  </div>
</template>

<script>
import Firebase from 'firebase';

const dbConfig = require('../../config/db.js');
export const firebase = Firebase.initializeApp(dbConfig);
export const database = firebase.database();

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
        days: '00',
        hours: '00', 
        minutes: '00',
        seconds: '00'
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
    let that = this;
    timerRef.on('value', function(snapshot) {
      that.finalDate = snapshot.val().timer;
    });
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  font-size: 12px;
  color: #8d8d8d;
}

#timer div {
  margin: 0px 15px;
  
}

#timer div span:first-child {
  font-size: 42px;
  text-shadow: #8c8c8c 0px 0px 0px;
}
</style>

