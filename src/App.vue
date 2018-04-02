<template>
  <div id="app">
    <h5>Hi there</h5>
  </div>
</template>

<script>

import Firebase from 'firebase';

const dbConfig = require('../config/db.js');
const firebase = Firebase.initializeApp(dbConfig);
const database = firebase.database();

export default {
  name: 'app'
}
</script>

<style lang="sass">

</style>

