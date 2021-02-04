<template>
  <footer class="footer pt-50 bg-dark">
    <div class="container">
      <div class="footer-widget-wrapper">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-6">
            <div class="footer-widget mb-30">
              <div class="text-center mb-10">
                <router-link to="/">
                  <img
                    src="@/assets/logo.jpg"
                    alt="logo"
                    style="height: 8rem;"
                  />
                </router-link>
              </div>
              <p>
                La Fundación Hondureña para el Niño con Cáncer esta comprometida
                en ayudar a que los pacientes y sus familias no se sientan solas
                en el viaje en contra del cáncer infantil.
              </p>
              <div class="footer-social-links">
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
          <div class="col-xl-2 col-lg-3 col-md-6">
            <div class="footer-widget mb-30">
              <h4>Navegación</h4>
              <ul class="footer-links">
                <li>
                  <router-link to="/">
                    Inicio
                  </router-link>
                </li>
                <li>
                  <router-link to="/about">
                    Acerca
                  </router-link>
                </li>
                <li><a href="#">Donar</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-5">
            <div class="footer-widget mb-30">
              <h4>Maneras de Ayudar</h4>
              <ul class="footer-links">
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Neurology</a></li>
                <li><a href="#">Gastroenterology</a></li>
                <li><a href="#">Routine Checkup</a></li>
                <li><a href="#">Orthopedics</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-7">
            <div class="footer-widget mb-30">
              <h4>Ubicación</h4>
              <div class="map-canvas">
                <iframe
                  class="map"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Honduran%20Foundation%20for%20children%20with%20cancer&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <p class="mb-0 text-center">
          Fundación Hondureña Para El Niño Con Cancer |
          {{ new Date().getFullYear() }}
          &#169;
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
