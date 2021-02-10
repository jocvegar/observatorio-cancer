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
                  Fundación Hondureña para el
                  <span class="alejandro">Niño con Cáncer</span>
                </h2>
                <p class="my-5 text-center text-md-left">
                  La Fundación Hondureña para el Niño Con Cáncer es una
                  organización benéfica, apolítica, sin fines de lucro, cuyo
                  objetivo principal es brindar de manera gratuita el
                  tratamiento oncológico a más 6,037 niños que a nivel nacional
                  padecen algún tipo de cáncer y que en su mayoría provienen de
                  familias de escasos recursos económicos.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  Creada en 1982 por un grupo de Damas Voluntarias, con el fin
                  de servir de apoyo y sostén a los niños en edades de cero a 18
                  años que padecen esta enfermedad y que son atendidos en la
                  Salas de Hemato Oncología Pediátrica de los Hospitales Escuela
                  en Tegucigalpa, Hospital Mario Catarino Rivas en San Pedro
                  Sula, Unidad de Oncología Pediátrica en el Hospital General
                  Atlántida de La Ceiba así como en las Clínicas de
                  Quimioterapia Ambulatoria ubicadas en los hospitales: Roberto
                  Suazo Córdova en La Paz, Regional del Sur en Choluteca,
                  Gabriela Alvarado en Danlí y San Francisco en Juticalpa.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  En 2021, la Fundación Hondureña para el Niño con Cáncer crea
                  el Observatorio Nacional de Cáncer Infantil de Honduras, con
                  la finalidad de fortalecer los procesos de gestión de la
                  información y el conocimiento en materia de cáncer infantil,
                  informar a la población sobre esta enfermedad, garantizar la
                  toma de decisiones informada y promover políticas publicas
                  efectivas que contribuyan a aumentar la probabilidad de sobre
                  vida de los niños y niñas con cáncer infantil.
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="my-5 text-center text-md-left"
                >
                  Para conocer más sobre la Fundación Hondureña para el Niño con
                  Cáncer y sus diferentes proyectos

                  <a
                    href="https://www.salvamivida.org"
                    target="_blank"
                    class="badge badge-danger text-center"
                    >salvamivida.org
                  </a>
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
  name: "Fundacion",
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
