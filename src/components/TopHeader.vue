<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-top theme-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="header-top-left text-center text-md-left">
                <ul>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=+50494369781">
                      <i class="fas fa-phone-alt fa-lg"></i>
                      9436-9781
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:observatoriohondurenocancerinfantil@salvamivida.org"
                    >
                      <i class="far fa-envelope fa-lg"></i
                      >observatoriohondurenocancerinfantil@salvamivida.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="header-top-right d-none d-md-block">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/salvamividahn/"
                      target="_blank"
                    >
                      <i class="fab fa-facebook fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/salvamivida/?hl=en"
                      target="_blank"
                    >
                      <i class="fab fa-instagram fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/salvamividahn" target="_blank">
                      <i class="fab fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC0hckbFj8KbUa_hZpWTqk_A"
                      target="_blank"
                    >
                      <i class="fab fa-youtube fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">
                  <img
                    class="navbar-brand-dark"
                    src="@/assets/logo_fundacion.jpg"
                    alt="FHPENCC"
                    style="width:auto;height: 5rem;"
                  />
                  <img
                    class="navbar-brand-dark ml-3"
                    src="@/assets/logo_observatorio.jpg"
                    alt="FHPENCC"
                    style="width:auto;height: 5rem;"
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  @click="navbarToggle()"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul
                    id="nav"
                    @click="linkToggler()"
                    class="navbar-nav ml-auto d-flex align-items-center"
                  >
                    <li class="nav-item">
                      <router-link to="/" class="stretched-link">
                        Inicio
                      </router-link>
                    </li>

                    <b-nav-item-dropdown
                      text="Observatorio"
                      right
                      :toggle-class="
                        subIsActive('/observatorio') ? 'active' : ''
                      "
                    >
                      <b-dropdown-item class="px-3" to="/observatorio/acerca">
                        <router-link
                          to="/observatorio/acerca"
                          class="stretched-link"
                        >
                          ¿Quienes Somos?
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item
                        class="px-3"
                        to="/observatorio/mision_vision"
                      >
                        <router-link
                          to="/observatorio/mision_vision"
                          class="stretched-link"
                        >
                          Misión y Visión
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item class="px-3" to="/observatorio/modelo">
                        <router-link
                          to="/observatorio/modelo"
                          class="stretched-link"
                        >
                          Modelo de Intervención
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item
                        class="px-3"
                        to="/observatorio/fundacion"
                      >
                        <router-link
                          to="/observatorio/fundacion"
                          class="text-wrap"
                        >
                          Fundación Hondureña Para El Niño Con Cáncer
                        </router-link>
                      </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                      text="Cáncer en Cifras"
                      right
                      disabled
                      :toggle-class="
                        subIsActive('/cancer_en_cifras') ? 'active' : ''
                      "
                    >
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/cancer_en_cifras/datos"
                          class="stretched-link"
                        >
                          Datos sobre Cáncer
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/cancer_en_cifras/indicadores"
                          class="stretched-link"
                        >
                          Datos e Indicadores
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/cancer_en_cifras/herramientas"
                          class="stretched-link"
                        >
                          Herramientas de Consulta
                        </router-link>
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown
                      disabled
                      text="Publicaciones"
                      right
                      :toggle-class="
                        subIsActive('/publicaciones') ? 'active' : ''
                      "
                    >
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/publicaciones/informes"
                          class="stretched-link"
                        >
                          Informes
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/publicaciones/boletines"
                          class="stretched-link"
                        >
                          Boletines
                        </router-link>
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown
                      disabled
                      text="Recursos"
                      right
                      :toggle-class="subIsActive('/recursos') ? 'active' : ''"
                    >
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/recursos/infografias"
                          class="stretched-link"
                        >
                          Infografías
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item class="px-3">
                        <router-link
                          to="/recursos/videos"
                          class="stretched-link"
                        >
                          Videos
                        </router-link>
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item>
                      <router-link to="/contacto" class="stretched-link">
                        Contacto
                      </router-link>
                    </b-nav-item>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navbarToggle() {
      let navbarToggle = document.querySelector(".navbar-toggler");
      let navbarCollapse = document.querySelector(".navbar-collapse");
      navbarCollapse.classList.toggle("show");
      navbarToggle.classList.toggle("active");
    },
    linkToggler() {
      let navbarToggle = document.querySelector(".navbar-toggler");
      let navbarCollapse = document.querySelector(".navbar-collapse");
      navbarToggle.classList.remove("active");
      navbarCollapse.classList.remove("show");
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #c70a0b !important;
}
</style>
