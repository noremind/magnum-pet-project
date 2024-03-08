<template lang="html">
  <div>
    <div class="container pt-5">
      <div class="row mb-4">
        <div class="col-xl-1"></div>
        <div class="col-xl-4"><h3>Добавьте новый продукт</h3></div>
      </div>
      <div class="row">
        <div class="col-xl-4"></div>
        <div class="col-xl-4">
          <form @submit.prevent="createProduct">
            <div class="mb-3">
              <label for="title">Название:</label>
              <input
                class="form-control"
                type="text"
                id="title"
                v-model.trim="form.title"
                :class="$v.form.title.$error ? 'is-invalid' : ''"
              />
              <p
                v-if="$v.form.title.$dirty && !$v.form.title.required"
                class="invalid-feedback"
              >
                Обязательное поле
              </p>
            </div>
            <div class="mb-3">
              <label for="category">Категория:</label>
              <select
                id="category"
                v-model="form.categoryId"
                class="form-control"
                :class="
                  $v.form.categoryId.$error && !$v.form.categoryId.required
                "
              >
                <option
                  v-for="(category, i) in categories"
                  :key="i"
                  :value="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
              <p
                v-if="$v.form.categoryId.$dirty && !$v.form.categoryId.required"
                class="invalid-feedback"
              >
                Обязательное поле
              </p>
            </div>
            <div class="mb-3">
              <label for="price">Цена:</label>
              <input
                class="form-control"
                type="number"
                id="price"
                v-model.trim="form.price"
                :class="$v.form.price.$error ? 'is-invalid' : ''"
              />
              <p
                v-if="$v.form.price.$dirty && $v.form.price.$model === 0"
                class="invalid-feedback d-block"
              >
                Укажите цену
              </p>
            </div>
            <div class="mb-3">
              <label for="specialPrice">Специальная цена:</label>
              <input
                class="custom-checkbox"
                type="checkbox"
                id="specialPrice"
                v-model.trim="form.specialPrice"
                :disabled="form.discount > 0"
              />
            </div>
            <div class="mb-3">
              <label for="image">Изображения:</label>
              <input
                class="form-control"
                type="file"
                id="image"
                accept="image/*"
                @change="onFileChange"
              />
            </div>
            <img
              :src="form.imageSrc"
              height="250px"
              alt=""
              v-if="form.imageSrc"
            />
            <div class="mb-3">
              <label for="discount">Скидка:</label>
              <div>
                <input
                  class="form-control"
                  type="text"
                  id="discount"
                  v-model="form.discount"
                  :disabled="form.specialPrice === true"
                />%
              </div>
            </div>
            <p class="mb-4">
              Цена со скидкой:
              {{
                Math.round(form.price - form.price * (form.discount / 100))
              }}тг
            </p>
            <div class="mb-3">
              <label for="lastDate">Последняя дата скидки:</label>
              <input
                class="form-control"
                type="text"
                id="lastDate"
                v-model.trim="form.lastDate"
              />
            </div>
            <!-- <p v-if="$v.form.price.$dirty && $v.form.title.$dirty" class="invalid-feedback d-block">Заполните поля</p> -->
            <button class="new_product_btn w-100">Добавить</button>
          </form>
        </div>
        <div class="col-xl-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import categories from "@/data/categories";

export default {
  name: "appNewProduct",
  mixins: [validationMixin],
  data() {
    return {
      categories,
      disableLabel: false,
      form: {
        title: "",
        price: 0,
        specialPrice: false,
        image: null,
        imageSrc: "",
        categoryId: 0,
        lastDate: "",
        amount: 1,
        discount: 0,
      },
    };
  },
  validations: {
    form: {
      title: { required },
      price: { required },
      categoryId: { required },
    },
  },
  methods: {
    createProduct() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const product = {
          title: this.form.title,
          categoryId: this.form.categoryId,
          image: this.form.image,
          price: this.form.price,
          discount: this.form.discount / 100,
          specialPrice: this.form.specialPrice,
          lastDate: this.form.lastDate,
          amount: this.form.amount,
        };

        this.$store
          .dispatch("CREATE_PRODUCT", product)
          .then(() => {
            this.$router.push("/catalog-discount");
            location.reload();
          })
          .catch(() => {});
      }
    },
    onFileChange(event) {
      const file = event.target.files[0]; // Здесь храниться изображения

      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e);
        this.form.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
      this.form.image = file;
    },
  },
};
</script>
<style lang="scss" scoped>
.new_product_btn {
  background-color: #f21066;
  border-radius: 15px;
  border: none;
  color: #fff;
  padding: 10px 0;
}
</style>
