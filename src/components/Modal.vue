<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>
      <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="hide">Disagree</v-btn>
        <v-btn color="green darken-1" flat @click.native="hide">Agree</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Modal',
  props: ['dialog'],
  data: () => ({
  }),
  components: {
  },
  methods: {
    hide: function() {
      this.$emit('send', false)
    }
  }
}
</script>

<style>


</style>

