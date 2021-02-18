<template>
  <div>
    <b-container>
      <b-overlay :show="loading" no-wrap>
        <template #overlay>
          <lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </template>
      </b-overlay>
    </b-container>
    <section class="general-section" v-if="!loading">
      <div class="slider-wrapper">
        <section class="slider-section">
          <div class="slider-active slick-style">
            <div class="single-slider img-bg" :style="cssProps">
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-8 col-md-10">
                    <div class="slider-content text-md-left text-center">
                      <h1
                        data-aos="fade-down"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                        class="text-light text-shadow"
                      >
                        Observatorio Nacional de Cáncer Infantil
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="bg-light pb-20 pt-20">
        <b-container>
          <b-row>
            <b-col cols="12" md="4">
              <b-img :src="require('@/assets/icons_1.png')"></b-img>
            </b-col>
            <b-col cols="12" md="4">
              <b-img :src="require('@/assets/icons_2.png')"></b-img>
            </b-col>
            <b-col cols="12" md="4">
              <b-img :src="require('@/assets/icons_3.png')"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <b-container fluid>
        <div class="row">
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="general-content mb-55 mt-55">
              <div class="section-title mb-30">
                <h4 class="mb-15 text-center">
                  Mensaje de la Presidente
                </h4>
              </div>

              <b-row>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    :src="require('@/assets/presidente.jpg')"
                    alt="mensaje presidente"
                    style="max-height: 20em;width: auto;"
                  ></b-img>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <p
                    data-aos="fade-down"
                    data-aos-delay="300"
                    class="my-5 text-center text-md-left"
                  >
                    La información es un activo invaluable para cuantificar,
                    evaluar y mejorar la atención ofrecida a los niños y niñas
                    con cáncer infantil de Honduras. Los esfuerzos y alianzas
                    interinstitucionales nos permiten fortalecer cada vez más
                    los sistemas de registro, monitoreo y análisis de
                    información sobre cáncer pediátrico, generando así evidencia
                    certera para orientar la toma de decisiones e impulsar
                    políticas públicas en favor de los pacientes
                    oncológico-pediátricos.
                  </p>
                  <b-button variant="primary" @click.prevent="toGoMessage()">
                    Continuar Leyendo
                    <i class="fas fa-share ml-2 mt-n1"></i>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
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
      cssProps: {
        backgroundImage: `url(${require("@/assets/banner_1.png")})`,
      },
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    toGoMessage() {
      this.$router.push({ path: "/mensaje-presidente" });
    },
  },
};
</script>

<style lang="scss" scoped>
.img-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
.text-shadow {
  text-shadow: 0px 1px 1px #000;
}
</style>
