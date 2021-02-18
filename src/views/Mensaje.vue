<template>
  <b-container>
    <b-overlay :show="loading" no-wrap> </b-overlay>
    <section class="general-section pt-60" v-if="!loading">
      <div class="container-fluid">
        <b-row>
          <div class="col-xl-10 col-lg-11 mx-auto">
            <div class="general-content mb-55">
              <div class="section-title mb-30">
                <h2 class="mb-15 text-center">
                  Mensaje de la
                  <span class="alejandro">Presidente</span>
                </h2>
              </div>
            </div>
          </div>
        </b-row>

        <b-row>
          <b-col class="text-center">
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
              La información es un activo invaluable para cuantificar, evaluar y
              mejorar la atención ofrecida a los niños y niñas con cáncer
              infantil de Honduras. Los esfuerzos y alianzas
              interinstitucionales nos permiten fortalecer cada vez más los
              sistemas de registro, monitoreo y análisis de información sobre
              cáncer pediátrico, generando así evidencia certera para orientar
              la toma de decisiones e impulsar políticas públicas en favor de
              los pacientes oncológico-pediátricos.
            </p>

            <p
              data-aos="fade-down"
              data-aos-delay="300"
              class="my-5 text-center text-md-left"
            >
              De este modo, el Observatorio Hondureño de Cáncer Infantil se
              constituye como una instancia técnica responsable de registrar,
              monitorear, almacenar, procesar, sistematizar, analizar y
              visibilizar la información sobre cáncer infantil, con la finalidad
              de crear conciencia en la población sobre la situación de la
              enfermedad en el país y mejorar la asistencia y calidad de vida de
              los pacientes oncológico-pediátricos.
            </p>

            <p
              data-aos="fade-down"
              data-aos-delay="300"
              class="my-5 text-center text-md-left"
            >
              El Observatorio ofrece un panorama general sobre la enfermedad a
              través del cálculo de diversos indicadores y variables de
              análisis, así como los principales resultados de los programas y
              proyectos implementados. Se constituye como una herramienta clave
              para monitorear la evolución de la atención a esta enfermedad.
            </p>

            <p
              data-aos="fade-down"
              data-aos-delay="300"
              class="my-5 text-center text-md-left"
            >
              Los indicadores y variables de análisis presentan diferentes
              niveles de desagregación, y se prevé poder adicionar información
              paulatinamente conforme se mejoran y amplían los registros de
              cáncer. Además, el observatorio se plantea como un espacio de
              análisis crítico que promueve el desarrollo de iniciativas de
              innovación y la investigación científica y social sobre cáncer
              infantil.
            </p>

            <p
              data-aos="fade-down"
              data-aos-delay="300"
              class="my-5 text-center text-md-left"
            >
              Toda esta información es evidencia certera del largo camino que la
              Fundación ha recorrido en su misión de aumentar la probabilidad de
              sobrevivencia de nuestros niños y niñas, pero también nos presenta
              grandes retos, que será posible enfrentar solo con el apoyo y la
              enorme solidaridad del pueblo hondureño.
            </p>
          </b-col>
        </b-row>
      </div>
    </section>
  </b-container>
</template>

<script>
export default {
  name: "Mensaje",
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
