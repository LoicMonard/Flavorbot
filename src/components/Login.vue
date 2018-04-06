<template>
  <div id="login">
    <h1>Login</h1>
    <div is="Timer"></div>
  </div>
</template>

<script>
import Firebase from 'firebase';
import Timer from '../components/Timer.vue'

export default {
  name: 'login',
  data() {
    return {
    }
  },
  methods: {

  },
  components: {
    Timer
  }
}
</script>

<style lang="sass" scoped>

</style>
