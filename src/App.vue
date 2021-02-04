<template>
  <div id="app">
    <top-header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    TopHeader,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8c96a7;
  overflow-x: hidden;
}
</style>
