<template>
  <v-app>
    <v-layout>
      <v-content>
        <transition name="fade">
          <router-view></router-view>
        </transition>
        <button @click="test = !test" style="position: absolute, top: 0">Click</button><span>HEYHEYHEY</span>
      </v-content>
      <v-footer app>
        <div is="Timer"></div>
      </v-footer>
      
    </v-layout>
  </v-app>
</template>

<script>

import Firebase from 'firebase';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Timer from './components/Timer.vue';

export default {
  name: 'app',
  data: () => ({
    test: false
  }),
  components: {
    Login,
    Signup,
    Timer
  }
}
</script>

<style>
  @font-face {
    font-family: 'Montserrat-Light';
    src: url('./assets/Montserrat-Light.ttf')
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/Montserrat-Regular.ttf')
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('./assets/Montserrat-Medium.ttf')
  }

  html, body {
    padding: 0;
    margin: 0;
    background: #d32f2f;
    height: 100%;
    width: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

