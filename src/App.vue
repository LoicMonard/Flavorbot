<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Firebase from 'firebase';
import Login from './components/Login';

export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/Montserrat-Light.ttf')
  }

  html, body {
    padding: 0;
    font-family: 'Montserrat';
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

