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
            <div class="general-content mb-55">
              <div class="section-title mb-30">
                <h2 class="mb-15 text-center">
                  Contacto
                </h2>
              </div>
            </div>
          </div>
        </div>
        <b-row class="mb-30" align-h="center">
          <b-col cols="12" md="8">
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group label="Nombre" label-for="nombre" class="text-dark">
                <b-form-input
                  trim
                  size="lg"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                ></b-form-input>

                <b-form-invalid-feedback>
                  {{ nameErrors }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Correo" label-for="correo" class="text-dark">
                <b-form-input
                  trim
                  size="lg"
                  v-model="$v.form.email.$model"
                  :state="validateState('email')"
                ></b-form-input>

                <b-form-invalid-feedback>
                  {{ emailErrors }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                label="Mensaje"
                label-for="message"
                class="text-dark"
              >
                <b-form-textarea
                  trim
                  v-model="$v.form.message.$model"
                  :state="validateState('message')"
                  rows="6"
                ></b-form-textarea>

                <b-form-invalid-feedback>
                  {{ messageErrors }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-row class="my-5" align-h="end">
                <b-col cols="4">
                  <b-button size="sm" type="submit" class="theme-btn">
                    Enviar
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </section>
  </b-container>
</template>

<script>
import Lottie from "@/components/lottie.vue";
import lottieSettings from "@/mixins/lottieMixin";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Contacto",
  components: {
    lottie: Lottie,
  },
  mixins: [lottieSettings, validationMixin],
  data() {
    return {
      loading: true,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
    },
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.form.$invalid) return;
      console.log("pase :>>");
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push("Nombre es requerido");
      !this.$v.form.name.minLength && errors.push("mínimo 3 caracteres");
      return new Intl.ListFormat().format(errors);
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.form.message.$dirty) return errors;
      !this.$v.form.message.required && errors.push("Mensaje es requerido");
      return new Intl.ListFormat().format(errors);
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Ingresar un correo válido");
      !this.$v.form.email.required && errors.push("Correo es requerido");
      return new Intl.ListFormat().format(errors);
    },
  },
};
</script>
