<template lang="html">
  <div>
    <div class="text-center py-5 redirect_hei">
      <h1 class="mb-3">Вы перешли не ту страницу</h1>
      <p>Пожалуйста вернитесь назад</p>
      <router-link :to="{name: 'main'}">Вернуться</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appRedirect'
}
</script>

<style lang="scss" scoped>
  .redirect_hei{
    height: 550px;
  }
</style>