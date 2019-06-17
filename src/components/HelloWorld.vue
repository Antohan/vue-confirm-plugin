<template>
<v-container>
  <v-btn @click="openConfirm">
    Open Confirm
  </v-btn>
</v-container>
</template>

<script>
import ConfirmDialog from './confirm-dialog.vue';

export default {
  methods: {
    openConfirm() {
      this.$confirm(ConfirmDialog).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
