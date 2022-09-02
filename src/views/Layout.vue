<template>
  <div>
    <AppTopnav />
    <AppHeader />
    <app-header-sticky/>
    <div class="app-body">
      <!--    二級路由-->
      <router-view/>
    </div>
    <AppFooter/>
  </div>

</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
import AppHeaderSticky from '@/components/app-header-sticky'
export default {
  name: 'Layout',
  components: { AppHeaderSticky, AppFooter, AppHeader, AppTopnav },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
