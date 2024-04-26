<template>
  <div class="app">
    <headerPage />
    <router-view></router-view>
    <footerComp />
  </div>

</template>

<script>
import footerComp from './components/footerComp.vue'
import headerPage from './components/Header.vue'


export default {
  name: 'App',
  components: { headerPage, footerComp },
  data() {
    return {
      title: ['YM Website']
    }
  }
}
</script>

<style scoped lang="less"></style>
