<template>
  <div class="serve">
    <headerTitle>
      <h4 style="color: white;">服务中心</h4>
    </headerTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTitle from '@/components/headerTitle.vue'
export default {
  name: 'servePage',
  components: {
    headerTitle
  },
}
</script>

<style>


</style>
