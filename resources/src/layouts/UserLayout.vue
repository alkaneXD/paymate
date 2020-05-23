<template>
  <div id="userLayout">
    <!--可以在此处添加头部和尾部-->
    <div class="container">
      <route-view></route-view>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'

export default {
  name: 'UserLayout',
  components: { RouteView },
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style scoped>
  #userLayout{
    width: 100%;
    height: 100%;
  }
</style>
