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
                  Modelo de <span class="alejandro">Intervención</span>
                </h2>
                <p class="my-5 text-center text-md-left">
                  El modelo de intervención del Observatorio parte del registro
                  de los diferentes determinantes de salud: detección,
                  tratamiento y atención del cáncer, así como el contexto
                  psicosocial de los pacientes oncológico-pediátricos.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  Posteriormente, los datos e información recabados permiten la
                  observación y monitoreo de indicadores para realizar los
                  análisis pertinentes a través de las publicaciones periódicas
                  del Observatorio, proyectos de investigación e innovación
                  tecnológica y científica.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  Finalmente, los resultados de análisis e investigación deben
                  ser comunicados a los tomadores de decisión para la evaluación
                  y mejora de la oferta sanitaria en materia de cáncer infantil
                  y el desarrollo de políticas públicas que cumplan con el fin
                  último de la intervención: el aumento de la probabilidad de
                  sobrevivencia de los pacientes.
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
  name: "Modelo",
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
