<script>
export default {
  name: "SearchDialog",
  props: {
    value: Boolean,
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    handleClose() {
      this.searchText = '';
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
  }
}
</script>

<template>
  <v-dialog
      :value="value"
      transition="dialog-bottom-transition"
      :fullscreen="true"
      @click:outside="closeDialog"
      @keydown.esc="closeDialog"
  >
    <v-card>
      <v-toolbar>
        <v-btn :icon="true" @click="closeDialog">
          <v-icon>mdi-keyboard-backspace</v-icon>
        </v-btn>
        <v-text-field
            v-model="searchText"
            prepend-inner-icon="mdi-magnify"
            label="상품을 검색해보세요"
            hide-details
            append-inner-icon="mdi-close-circle-outline"
            @click:append-inner="handleClose"
        ></v-text-field>
      </v-toolbar>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>