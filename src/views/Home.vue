<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" style="height:20vh" />
    <HelloWorld msg="HOLA" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
