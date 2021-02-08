<template>
  <div id="app">
    <top-header class="mb-30" />
    <div class="wrapper">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";
import AOS from "aos";

export default {
  components: {
    TopHeader,
    Footer,
  },
  created() {
    AOS.init({ once: true });
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
.wrapper {
  min-height: 80vh;
}
</style>
