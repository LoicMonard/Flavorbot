<template>
  <v-app>
    <v-container fluid>
    <v-toolbar id="toolbar" fixed>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-items>
        <v-btn flat>HOME</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>GET STARTED</v-btn>
        <v-btn flat>ABOUT</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex xs12 md6 text-xs-center>
          <div style="position: absolute; left: 50%;">
            <div class="display-3 overtitle" style="color: #3f51b5;">Flavorbot</div>
          </div>
          <div class="display-1" style="color: #c4c4c4; font-weight: 200;">Flavorbot</div>
          <div><img src="./assets/FlavorbotBlue-2.png" id="logo" style="width: 10vh"></div>
          <div class="body-2" style="color: rgb(115, 115, 115)">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br>
          <div class="body-2" style="color: rgb(115, 115, 115)">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div><br>
          <v-btn outline color="indigo">Get started</v-btn>
        </v-flex>
      </v-layout> -->
      
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <!-- <v-layout justify-center>
        <v-flex md4>
        <v-content>
        </v-content>
        <v-footer class="footer" app>
          <div is="Timer"></div>
        </v-footer>
        </v-flex>
      </v-layout> -->

    </v-container>
  </v-app>
</template>

<script>

import Firebase from 'firebase';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Timer from './components/Timer.vue';
import DropOutlined from './assets/BottleOutlined.svg'

export default {
  name: 'app',
  data: () => ({
    test: false
  }),
  components: {
    Login,
    Signup,
    Timer,
    DropOutlined
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
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .overtitle {
    position: relative;
    font-weight: 800;
    opacity: .2;
    left: -50%;
    top: -20px;
    z-index: 0;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
  }

  .container {
    background: #0c003a; /* Old browsers */
    background: -moz-linear-gradient(45deg, #0c003a 0%, #182e60 100%, #182e60 101%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, #0c003a 0%,#182e60 100%,#182e60 101%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(0deg, black 0%,#182e60 100%,#182e60 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c003a', endColorstr='#182e60',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  #toolbar {
    background-color: rgba(255, 255, 255, 0.05) !important;
    box-shadow: none;
  }

  #toolbar * {
    color: #ADABC9 !important;
  }

  .c-headline {
    height: auto;
    margin: 1vh 0vh;
  }

  .c-headline * {
    margin: 1vh 0vh;
  }

  .footer {
    height: 150px !important;
    display: flex;
    justify-content: center;
  }

  #logo {
    -webkit-filter: drop-shadow(15px 15px 15px cyan);
    filter: drop-shadow(0px -0px 0px cyan);
    margin: 2vh;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

</style>

