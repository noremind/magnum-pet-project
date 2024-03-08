<template lang="html">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-10">
          <div class="d-flex justify-content-center my-5">
            <form @submit.prevent="checkForm" class="login_form">
              <h2>Войти</h2>
              <div class="form-group">
                <div class="d-block my-3">
                  <label for="login">E-mail:</label>
                  <input
                    type="text"
                    id="login"
                    class="form-control"
                    v-model.trim="form.email"
                    :class="$v.form.email.$error ? 'is-invalid' : ''"
                  />
                  <p
                    v-if="$v.form.email.$dirty && !$v.form.email.required"
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>
                  <p
                    v-if="$v.form.email.$dirty && !$v.form.email.email"
                    class="invalid-feedback"
                  >
                    E-mail некорректный
                  </p>
                </div>
                <div class="d-block my-3">
                  <label for="password">Пароль:</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model.trim="form.password"
                    :class="$v.form.password.$error ? 'is-invalid' : ''"
                  />
                  <p
                    v-if="$v.form.password.$dirty && !$v.form.password.required"
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                  Войти
                </button>

                <p class="min_font_size">
                  Вы не зарегистрированы ?
                  <router-link
                    tag="span"
                    :to="{ name: 'register' }"
                    class="magnum_color cursor_pointer"
                    >Регистрируйтесь</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-1"></div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "appLogin",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    ...mapActions(["LOGIN_USER"]),
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const user = {
          email: this.form.email,
          password: this.form.password,
        };
        this.LOGIN_USER(user)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login_form {
  border: 4.2px dashed #f12066;
  border-radius: 20px;
  box-shadow: 1px 10px 10px 5px rgba(34, 60, 80, 0.16);
  padding: 50px 100px;
}
.login_form button {
  background-color: #f12066;
  color: #fff;
  font-weight: 600;
}
</style>
