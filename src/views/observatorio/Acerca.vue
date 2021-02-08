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
                  ¿Quiénes <span class="alejandro">Somos</span>?
                </h2>
                <p class="my-5 text-center text-md-left">
                  El Observatorio Nacional de Cáncer Infantil es una instancia
                  técnica responsable de registrar, monitorear, almacenar,
                  procesar, sistematizar, analizar y visibilizar la información
                  sobre cáncer infantil en Honduras, con la finalidad de crear
                  conciencia en la población sobre la situación del cáncer
                  infantil en el país y generar evidencia para la formulación de
                  políticas públicas que mejoren la asistencia y calidad de vida
                  de los pacientes oncológico-pediátricos.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  A su vez, el observatorio se constituye como un espacio de
                  análisis crítico que promueve el desarrollo de iniciativas de
                  innovación y la investigación científica y social sobre cáncer
                  infantil.
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
                  Objetivo General
                </h3>
                <p data-aos="fade-down" class="my-5 text-center text-md-left">
                  Garantizar un proceso adecuado de gestión de la información y
                  el conocimiento sobre cáncer infantil para informar la toma de
                  decisiones y orientar la formulación de políticas públicas que
                  mejoren la asistencia y calidad de vida de los pacientes
                  oncológico-pediátricos.
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
                  Objetivos Específicos
                </h3>
                <ul class="my-5 pl-3 text-left" style="list-style: disc;">
                  <li class="my-3" data-aos="fade-down">
                    Sistematizar e integrar los datos e información sobre cáncer
                    infantil de las diferentes fuentes y registros.
                  </li>
                  <li class="my-3" data-aos="fade-down">
                    Difundir información sobre cáncer infantil que contribuya a
                    la mejora de la salud pública de la población.
                  </li>
                  <li class="my-3" data-aos="fade-down">
                    Propiciar el análisis crítico sobre la problemática de
                    cáncer infantil en Honduras.
                  </li>
                  <li class="my-3" data-aos="fade-down">
                    Promover, coordinar y apoyar proyectos de investigación
                    científica y social sobre cáncer infantil.
                  </li>
                  <li class="my-3" data-aos="fade-down">
                    Desarrollar iniciativas de innovación que mejoren la
                    atención al paciente oncológico pediátrico.
                  </li>
                  <li class="my-3" data-aos="fade-down">
                    Brindar seguimiento a la oferta sanitaria en materia de
                    cáncer infantil.
                  </li>
                </ul>
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
  name: "Acerca",
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
