<template>
  <v-dialog
      :value="dialog"
      @change="change"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location.
          This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="choose(false)"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="choose(true)"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    choose(value) {
      this.choice = value;
      this.$destroy();
    },
    change() {
      this.$destroy();
    },
  },
};
</script>
