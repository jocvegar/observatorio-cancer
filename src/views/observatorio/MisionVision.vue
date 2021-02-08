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
                  Misión y <span class="alejandro">Visión</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="general-content mb-55">
              <div class="section-title mb-30">
                <h3 class="mb-15 success text-left">
                  Misión
                </h3>
                <p data-aos="fade-down" class="my-5 text-center text-md-left">
                  Constituir un espacio reflexivo de gestión e intercambio de
                  conocimiento para fortalecer el diseño, implementación y
                  gestión de políticas públicas que mejoren la asistencia y
                  calidad de vida de los pacientes oncológico-pediátricos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="general-content mb-55">
              <div class="section-title mb-30">
                <h3 class="mb-15 success text-left">
                  Visión
                </h3>
                <p data-aos="fade-down" class="my-5 text-center text-md-left">
                  Para 2030 convertirse en el organismo referente en gestión de
                  la información y conocimiento sobre cáncer infantil en la
                  región centroamericana.
                </p>
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
  name: "MisionVision",
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
