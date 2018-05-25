<template>
  <div class="attention-container">
    <base-page username="pipi">
        <div class="attention-content">
          <div class="left">
             <p class="text text1">长按识别二维码</p>
             <p class="text text2">支持TA一下吧</p>
             <div class="icon"></div>
          </div>
          <div class="right">
             <img src="../../assets/images/qr-code.png" alt="">
          </div>
        </div>
    </base-page>
  </div>
</template>
<script>
import BasePage from '../../components/basepage/basepage'
export default {
  data () {
    return {
      username: ''
    }
  },
  components: {
    BasePage
  }
}
</script>
<style lang="scss" scoped>
.attention-container {
  height: 100%;
  .attention-content {
    display: flex;
    justify-content: center;
    margin-top: 0.58rem;
    .left {
      .icon {
        width: 0.65rem;
        height: 0.78rem;
        background: url(../../assets/images/finger.png) no-repeat;
        background-size: 100% 100%;
      }
      .text {
        font-size: 0.22rem;
      }
      .text1 {
        color: #333333;
      }
      .text2 {
        color: #ff0101;
      }
    }
    .right {
      margin-left: 0.5rem;
      img {
        width: 1.48rem;
        height: 1.48rem;
      }
    }
  }
}
</style>
