<template>
  <v-card>
    <v-card-title id="card-title">
      Connexion
    </v-card-title>
    <v-progress-linear v-if="pending" :indeterminate="true" height="2" style="margin: 0"></v-progress-linear>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="user.email" :rules="emailRules" required></v-text-field>
        <v-text-field prepend-icon="lock" name="mot de passe" label="Mot de passe" v-model="user.password" id="password" type="password" :rules="passwordRules" required></v-text-field>
        <span text-color="accent">{{message}}</span>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="accent" :to="{ path: '/signup'}">Inscription</v-btn>
      <v-btn color="accent" @click="submit" :disabled="!valid">Connexion</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Firebase from 'firebase';
import Timer from '../components/Timer.vue';
import { firebase, database } from './Timer.vue';

export default {
  name: 'login',
  data: () => ({
    valid: true,
    pending: false,
    message: '',
    user: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || "L'email est requis",
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "L'email doit être valide"
    ],
    passwordRules: [
      v => !!v || 'Le mot de passe est requis',
      v => v.length > 5 || 'Le mot de passe doit contenir au moins 6 caractères'
    ]
  }),
  computed: {
  },
  methods: {
    submit: function() {
      this.pending = true;
      if (this.$refs.form.validate()) {
        firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(result => {
          this.message = 'Connexion reussie'
          this.pending = false;
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.message = errorMessage;
          console.log(errorCode + ' ||| ' + errorMessage);
          this.pending = false;
        });
      } else 
        console.log('Formulaire invalide');
    }
  },
  components: {
    Timer
  },
  created() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('no user');
      }
    });
  }
}

</script>

<style>
#card-title {
  background: #d81b60;
  color: #fff;
}
</style>
