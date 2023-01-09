<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./Nav/index.vue";

export default {
  name: "Layout",
  components: { Nav },
  props: {},
  watch: {},
  data() {
    return {
      active: "",
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
