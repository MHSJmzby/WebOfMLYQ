<template>
  <div id="about">
    <headerTitle>
      <h4 style="color: white;">关于我们</h4>
    </headerTitle>
    <router-view></router-view>
  </div>
</template>

<script>

import headerTitle from '@/components/headerTitle.vue'
export default {
  name: 'aboutPage',
  components: {
    headerTitle
  },

}
</script>

<style>

</style>
