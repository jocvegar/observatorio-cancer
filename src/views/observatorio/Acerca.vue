<template>
  <b-container>
    <b-overlay :show="loading" no-wrap></b-overlay>
    <section class="about-section pt-60" v-if="!loading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="about-content text-center mb-55">
              <div class="section-title mb-30">
                <h2 class="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  ¿Quienes <span class="alejandro">Somos</span>?
                </h2>
                <p data-aos="fade-up" class="my-5">
                  El Observatorio Nacional de Cáncer Infantil es una instancia
                  técnica responsable de registrar, monitorear, almacenar,
                  procesar, sistematizar, analizar y visibilizar la información
                  sobre cáncer infantil en Honduras, con la finalidad de crear
                  conciencia en la población sobre la situación del cáncer
                  infantil en el país y generar evidencia para la formulación de
                  políticas públicas que mejoren la asistencia y calidad de vida
                  de los pacientes oncológico-pediátricos.
                </p>
                <p data-aos="fade-up" data-aos-delay="300" class="my-5">
                  A su vez, el observatorio se constituye como un espacio de
                  análisis crítico que promueve el desarrollo de iniciativas de
                  innovación y la investigación científica y social sobre cáncer
                  infantil.
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
export default {
  name: "Acerca",
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

<style></style>
