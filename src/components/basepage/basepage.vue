<template>
  <div class="base-container">
    <div class="content">
       <div class="ad-logo"></div>
       <div class="info">
          <div class="text">
            <p class="text-user">{{username}}</p>
            <p class="text-desc">正在免费申领乐事薯片！小伙伴们快来助力哦！</p>
          </div>
          <div class="avatar">
          </div>
       </div>
       <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['username']
}
</script>

<style lang="scss" scoped>
.base-container {
  height: 100%;
  background-image: url(../../assets/images/page-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    padding-top: 0.9rem;
  }
  .ad-logo {
    margin: 0 auto;
    width: 4.1rem;
    height: 4.1rem;
    background: url(../../assets/images/ad-logo.png) no-repeat;
    background-size: 100% 100%;
  }
  .info {
    position: relative;
    .text {
      margin: 0.6rem auto 0;
      padding-left: 0.64rem;
      width: 4.6rem;
      height: 1rem;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 0.2rem;
      .text-user {
        font-size: 0.18rem;
        color: #903e02;
      }
      .text-desc {
        font-size: 0.16rem;
        color: #333;
      }
    }
    .avatar {
      position: absolute;
      left: 0.5rem;
      top: 0;
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      background-color: #ffffff;
    }
  }
}
</style>
