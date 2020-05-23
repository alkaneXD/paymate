<template>
  <div class="logo">
    <div id="logo-div">
      <img style="width: 64px; height: 64px" :src="userImg" alt="">
      <span>admin</span>
      <span>初级管理员</span>
    </div>
  </div>
</template>

<style scoped>
  #logo-div{display: flex;flex-direction: column;justify-content: center;}
</style>

<script>
export default {
  name: 'Logo',
  components: {

  },
  props: {

  },
  data () {
    return {
      userImg: require('../../assets/logo.png')
    }
  }
}
</script>
