<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <HomeCategory />
        <home-banner />
      </div>
      <HomeNew />
      <HomeHot />
      <HomeBrand />
      <HomeProduct />
      <HomeSpecial />
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
import HomeNew from '@/views/home/components/home-new'
import HomeHot from '@/views/home/components/home-hot'
import HomeBrand from '@/views/home/components/home-brand'
import HomeProduct from '@/views/home/components/home-product'
import HomeSpecial from '@/views/home/components/home-special'
export default {
  name: 'PageHome',
  components: { HomeSpecial, HomeBrand, HomeHot, HomeNew, HomeBanner, HomeCategory, HomeProduct },
  setup () {

  }
}
</script>
<style scoped lang="less">

</style>
