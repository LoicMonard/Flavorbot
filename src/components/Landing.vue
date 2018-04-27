<template>
    <v-layout justify-center align-center style="margin-top: 20vh">
      <v-flex xs12 md6 text-xs-center>
        <div style="position: absolute; left: 50%;">
          <div class="display-3 overtitle" style="color: #3f51b5;">Flavorbot</div>
        </div>
        <div class="display-1" style="color: #c4c4c4; font-weight: 200;">Flavorbot</div>
        <div style="box-sizing: border-box; padding: 5vh; margin: 2vh 0vh;">
          <RedFlacon id="redflacon"></RedFlacon>
          <img src="../assets/FlavorbotBlue-2.png" id="logo" style="width: 10vh">
          <BottleGreen id="bottlegreen"></BottleGreen>
        </div>
        <div class="body-2" style="color: rgb(115, 115, 115)">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br>
        <div class="body-2" style="color: rgb(115, 115, 115)">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div><br>
        <v-btn outline color="indigo">Get started</v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
import BottleGreen from '../assets/BottleGreen.svg'
import RedFlacon from '../assets/RedFlacon.svg'

export default {
  name: 'landing',
  components: {
    BottleGreen,
    RedFlacon
  }
}
</script>

<style>

#bottlegreen {
  width: 10vh;
}

#redflacon {
  width: 10vh;
}

</style>

