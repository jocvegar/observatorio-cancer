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
                    <a href="https://api.whatsapp.com/send?phone=+50494583244">
                      <i class="fas fa-phone-alt fa-lg"></i>
                      9458-3244
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="far fa-envelope fa-lg"></i>info@salvamivida.org
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
                    src="@/assets/logo.jpg"
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
                    class="navbar-nav ml-auto d-flex align-items-center"
                  >
                    <li class="nav-item">
                      <router-link to="/">
                        Inicio
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about">
                        Acerca
                      </router-link>
                    </li>

                    <li class="nav-item">
                      <a
                        href="#"
                        class="btn btn-danger navigation-links text-white px-3 px-md-2"
                      >
                        Donar
                      </a>
                    </li>
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
export default {};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #c70a0b !important;
}
</style>
