<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-card-title id="card-title">
            Inscription
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="user.email" :rules="emailRules" required></v-text-field>
              <v-text-field prepend-icon="lock" name="mot de passe" label="Mot de passe" v-model="user.password" id="paessword" type="password" :rules="passwordRules" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <span></span>
            <v-spacer></v-spacer>
            <v-btn color="accent" :to="{ path: '/login'}">Connexion</v-btn>
            <v-btn color="accent" @click="submit" :disabled="!valid">Inscription</v-btn>
          </v-card-actions>
        </v-card>
        <!-- <div is="Timer"></div> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Firebase from 'firebase';
import Timer from '../components/Timer.vue'

export default {
  name: 'login',
  
  data: () => ({
    valid: true,
    user: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || "L'email est requis",
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "L'email doit être valide"
    ],
    passwordRules: [
      v => !!v || 'Le mot de passe est requis'
    ]
  }),
  computed: {
  },
  methods: {
    submit: function() {
      if (this.$refs.form.validate()) {
        console.log('yes');
      } else 
        console.log('no');
    }
  },
  components: {
    Timer
  },
  created() {
  }
}

</script>

<style>
#card-title {
  background: #d32f2f;
  color: #fff;
}
</style>
