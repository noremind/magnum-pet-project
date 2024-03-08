<template lang="html">
  <div>
    <PayPage v-if="IS_PAY_PAGE"></PayPage>

    <div class="container-fluid pt-5">
      <div class="row mb-3">
        <div class="col-xl-1"></div>
        <div class="col-xl-5">
          <p class="min_font_size">
            <router-link
              tag="span"
              :to="{ name: 'main' }"
              class="cursor_pointer"
              >Главная</router-link
            >
            /
            <router-link
              tag="span"
              :to="{ name: 'cart' }"
              class="cursor_pointer"
              >Корзина</router-link
            >
            /
            <router-link tag="span" :to="{ name: 'address' }"
              >Офомления товара</router-link
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-4 mb-3">
          <h2>Заполните поля для оформления</h2>
        </div>
      </div>
      <form @submit.prevent="checkForm">
        <div class="row">
          <div class="col-xl-1"></div>
          <div class="col-xl-4">
            <div>
              <div class="mb-4">
                <label for="name">Имя:</label>
                <input
                  type="text"
                  id="name"
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
              <div class="mb-4">
                <label for="city">Город:</label>
                <input
                  type="text"
                  id="city"
                  class="form-control"
                  v-model.trim="CITY_SELECTED"
                  :class="$v.form.city.$error ? 'is-invalid' : ''"
                />
                <p
                  v-if="!$v.form.city.required && $v.form.city.$dirty"
                  class="invalid-feedback"
                >
                  Обязательное поле
                </p>
              </div>
              <div class="mb-4">
                <label for="address">Адрес:</label>
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  v-model.trim="form.address"
                  :class="$v.form.address.$error ? 'is-invalid' : ''"
                />
                <p
                  v-if="!$v.form.address.required && $v.form.address.$dirty"
                  class="invalid-feedback"
                >
                  Обязательное поле
                </p>
              </div>
              <div class="mb-4">
                <label for="number">Номер телефона:</label>
                <input
                  type="text"
                  id="number"
                  class="form-control"
                  v-model.trim="form.tel"
                  :class="$v.form.tel.$error ? 'is-invalid' : ''"
                />
                <p
                  v-if="!$v.form.tel.required && $v.form.tel.$dirty"
                  class="invalid-feedback"
                >
                  Обязательное поле
                </p>
              </div>
              <div class="mb-4">
                <label for="email">E-mail:</label>
                <input
                  type="text"
                  id="email"
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
              </div>
            </div>
          </div>
          <div class="col-xl-2"></div>
          <div class="col-xl-3">
            <div class="">
              <PlanProduct></PlanProduct>
            </div>
          </div>
          <div class="col-xl-1"></div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import PlanProduct from "@/components/litle-components/PlanProduct";
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import PayPage from "@/components/pages/PayPage";

export default {
  name: "appAddress",
  mixins: [validationMixin],
  data() {
    return {
      pay: true,
      form: {
        name: "",
        tel: "",
        email: "",
        address: "",
        city: "Алматы",
      },
    };
  },
  validations: {
    form: {
      name: { required },
      tel: { required },
      email: { required, email },
      address: { required },
      city: { required },
    },
  },
  components: {
    PlanProduct,
    PayPage,
  },
  computed: {
    ...mapGetters(["CITY_SELECTED", "IS_PAY_PAGE"]),
  },
  methods: {
    ...mapActions(["CLOSE_PAY_PAGE"]),
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("Win");
        this.CLOSE_PAY_PAGE(true);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
