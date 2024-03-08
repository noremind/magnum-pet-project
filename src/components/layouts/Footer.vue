<template lang="html">
    <div>
        <footer>
            <div class="container-fluid my-5">
                <div class="row mb-5">
                    <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
                    <div class="col-xl-3">
                        <img src="images/logo-footer.4776a6e7.svg" alt="">
                    </div>
                </div>
                <div class="row footer">
                    <div class="col-xl-1"></div>
                    <div class="col-xl-10">
                        <div class="footer-wrap row">
                            <div class="col">
                                <h5>Покупателям</h5>
                                <p><router-link :to="{name: 'promo'}">Акции</router-link></p>
                                <p><router-link :to="{name: 'catalog-discount'}">Каталог скидок</router-link></p>
                                <!-- <p><router-link :to="{name: ''}">Magnum Club</router-link></p> -->
                                <p><router-link  :to="{name: 'contacts'}">Контакты</router-link></p>
                            </div>
                            <div class="col">
                                <h5>О компании</h5>
                                <p><router-link :to="{name: 'about'}">Компания Magnum</router-link></p>
                                <p><router-link :to="{name: 'contacts'}">Работа в Magnum</router-link></p>
                                <p><router-link :to="{name: 'our-brands'}">Наши бренды</router-link></p>
                            </div>
                            <div class="col">
                                <h5>Сотрудничество</h5>
                                <p><router-link :to="{name: 'contacts'}">Поставщикам</router-link></p>
                                <p><router-link :to="{name: 'contacts'}">Рекламодателям</router-link></p>
                                <p><router-link :to="{name: 'contacts'}">Арендаторам</router-link></p>
                            </div>
                            <div class="col">
                                <h5>Служба поддержки</h5>
                                <p><a href="tel:7766">7766 | звонок бесплатный</a></p>
                                <h5>Мы в социальных сетях</h5>
                                <div>
                                    <a href="#"><img src="images/fb.06ea8641.svg" alt="Facebook"></a>
                                    <a href="https://www.instagram.com/magnum.kz/"><img src="images/insta.6c9841c2.svg" alt="Instagram"></a>
                                    <a href="#"><img src="images/tiktok.a7f066c8.svg" alt="Tiktok"></a>
                                    <a href="#"><img src="images/vk.14c5e689.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'appFooter',
}
</script>

<style lang="scss" scoped>

</style>