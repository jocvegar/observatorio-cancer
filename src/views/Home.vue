<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    query: () => ({
      query: `query {
       patients(limit: 1) {
        id
        identidad
       }
     }`,
    }),
  },
  created() {
    axios
      .post("https://www.registrodecancerhn.com/graphql", this.query())
      .then((response) => {
        console.log("data", (this.data = response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.home {
  text-align: center;
}
</style>
