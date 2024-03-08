<template lang="html">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-10">
          <div class="d-flex justify-content-center my-5">
            <form @submit.prevent="userRegistration" class="login_form">
              <h2>Регистрация</h2>
              <div class="form-group">
                <div class="d-block">
                  <label for="nickname">Имя:</label>
                  <input
                    type="text"
                    id="nickname"
                    class="form-control"
                    v-model.trim="form.name"
                    :class="$v.form.name.$error ? 'is-invalid' : ''"
                  />
                  <p
                    v-if="!$v.form.name.required && $v.form.name.$dirty"
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>
                </div>
                <div class="d-block my-2">
                  <label for="login">E-mail:</label>
                  <input
                    type="text"
                    id="login"
                    class="form-control"
                    v-model.trim="form.email"
                    :class="$v.form.email.$error ? 'is-invalid' : ''"
                  />
                  <p
                    v-if="!$v.form.email.required && $v.form.email.$dirty"
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>
                  <p
                    v-if="!$v.form.email.email && $v.form.email.$dirty"
                    class="invalid-feedback"
                  >
                    E-mail некорректный
                  </p>
                </div>
                <div class="d-block my-2">
                  <label for="password">Пароль:</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model.trim="form.password"
                    :class="$v.form.password.$error ? 'is-invalid mb-2' : ''"
                  />
                  <p
                    v-if="!$v.form.password.required && $v.form.password.$dirty"
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>

                  <p
                    v-if="
                      !$v.form.password.minLength && $v.form.password.$dirty
                    "
                    class="invalid-feedback"
                  >
                    Более 6-и символов
                  </p>
                </div>
                <div class="d-block">
                  <label for="confirm-password">Подтвердите пароль:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    class="form-control"
                    v-model.trim="form.confirmPassword"
                    :class="$v.form.confirmPassword.$error ? 'is-invalid' : ''"
                  />
                  <p
                    v-if="
                      !$v.form.confirmPassword.required &&
                      $v.form.confirmPassword.$dirty
                    "
                    class="invalid-feedback"
                  >
                    Обязательное поле
                  </p>

                  <p
                    v-if="
                      $v.form.confirmPassword.$dirty &&
                      form.password !== form.confirmPassword
                    "
                    class="invalid-feedback d-block"
                  >
                    Пароль не совпадает
                  </p>
                </div>
                <button type="submit" class="btn btn-primary my-2">
                  Регистрироваться
                </button>
                <p class="min_font_size">
                  У вас есть аккаунт ?
                  <router-link
                    tag="span"
                    :to="{ name: 'login' }"
                    class="magnum_color cursor_pointer"
                    >Войти</router-link
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
// import firebase from "firebase";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "appRegister",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required },
    },
  },
  methods: {
    ...mapActions(["REGISTER_USER"]),
    userRegistration() {
      this.$v.form.$touch();
      if (
        !this.$v.form.$error &&
        this.form.password === this.form.confirmPassword
      ) {
        const user = {
          email: this.form.email,
          password: this.form.password,
        };
        this.REGISTER_USER(user)
          .then(() => {
            localStorage.setItem("userName", this.form.name);
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
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
