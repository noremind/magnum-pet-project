<template lang="html">
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-3">
          <p> <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Контакты</span></p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-xl-1"></div>
        <div class="col-xl-3">
          <h2>Контакты</h2>
        </div>
      </div>


      <div class="row my-3">
        <div class="col-xl-1"></div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">Головной офис</h4>
          <p>Мы находимся по адресу город Алматы, <br> мкр. Астана, 1/10, ТЦ 'Люмир', 4 этаж</p>
        </div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">Служба доставки Magnum GO</h4>
          <p><a href="tel:7772" class="contact_tel_link">7726</a> | (звонок с мобильного бесплатный)</p>
        </div>
        <div class="col-xl-1"></div>
      </div>

      <div class="row my-3">
        <div class="col-xl-1"></div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">Служба поддержки</h4>
          <p> <a href="tel:7766" class="contact_tel_link">7766</a> (звонок с мобильного бесплатный)</p>
        </div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">Для предложений поставщиков</h4>
          <p><a href="mailto:kp@magnum.kz" class="contact_mailto_link">kp@magnum.kz</a></p>
        </div>
        <div class="col-xl-1"></div>
      </div>

      <div class="row my-3">
        <div class="col-xl-1"></div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">По общим вопросам</h4>
          <p><a href="mailto:info@magnum.kz" class="contact_mailto_link">info@magnum.kz</a></p>
        </div>
        <div class="col-xl-5">
          <h4 class="font_weight_bolder">Для предложений рекламодателям</h4>
          <p><a href="mailto:kp@magnum.kz" class="contact_mailto_link">kp@magnum.kz</a></p>
        </div>
        <div class="col-xl-1"></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'appContacts'
}
</script>

<style lang="scss" scoped>
  .contact_tel_link{
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid #f21066;
  }

  .contact_mailto_link{
    color: #f21066;
  }
</style>