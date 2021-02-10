<template>
  <b-container>
    <b-overlay :show="loading" no-wrap>
      <template #overlay>
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
      </template>
    </b-overlay>
    <section class="general-section pt-60" v-if="!loading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="general-content  mb-55">
              <div class="section-title mb-30">
                <h2 class="mb-15 text-center">
                  Observatorio Nacional de
                  <span class="alejandro"> Cáncer Infantil</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </b-container>
</template>

<script>
import Lottie from "@/components/lottie.vue";
import lottieSettings from "@/mixins/lottieMixin";
export default {
  name: "HelloWorld",
  components: {
    lottie: Lottie,
  },
  mixins: [lottieSettings],
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped></style>
