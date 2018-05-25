<template>
  <div class="invitation-container">
    <base-page username="pipi">
        <div class="invitation-content">
           <div class="text-wrapper">
             <div class="top">
               <span class="text-detail"><span class="strength">4</span>位好友已助力成功, 请耐心等待开奖</span>
             </div>
           </div>
           <avatar-list :list="list"></avatar-list>
        </div>
    </base-page>
    <page-mask v-if="true">
      <div class="mask-content">
         <p class="text">助力已成功，我也要申领</p>
         <div class="icon"></div>
         <div class="img">
           <!-- <img src="../../assets/images/qr-code.png" alt=""> -->
         </div>
      </div>
    </page-mask>
  </div>
</template>
<script>
import BasePage from '../../components/basepage/basepage'
import AvatarList from '../../components/avatarlist/avatarlist'
import PageMask from '../../components/pagemask/pagemask'
export default {
  data () {
    return {
      username: '',
      list: [1, 2, 3, 4]
    }
  },
  components: {
    BasePage,
    AvatarList,
    PageMask
  }
}
</script>
<style lang="scss" scoped>
.invitation-container {
  height: 100%;
  .invitation-content {
    margin-top: 0.85rem;
    .text-wrapper {
      margin-bottom: 0.7rem;
    }
    .top {
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      .text-detail {
        font-size: 0.2rem;
        color: #ffffff;
      }
    }
    .other {
      margin-top: 0.14rem;
      text-align: center;
      font-size: 0.18rem;
    }
    .strength {
      color: #ff0000;
    }
  }
  .mask-content {
    margin-top: 7.15rem;
    .text {
      font-size: 0.26rem;
      color: #ffffff;
      text-align: center;
    }
    .icon {
      margin: 0.18rem auto 0;
      width: 0.66rem;
      height: 0.78rem;
      background: url(../../assets/images/finger-color.png) no-repeat;
      background-size: 100% 100%;
    }
    .img {
      margin: 0.12rem auto 0;
      width: 1.8rem;
      height: 1.8rem;
      background: url(../../assets/images/qr-code.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
