<template>
  <div class="invitation-container">
    <base-page username="pipi">
        <div class="invitation-content">
           <div class="text-wrapper">
             <div class="top">
               <p class="text-title">邀请好友</p>
               <p class="text-detail">收藏此页面，方便查看进度</p>
             </div>
             <p class="other">还差<span class="strength">2</span>人助力</p>
           </div>
           <avatar-list :list="list"></avatar-list>
        </div>
    </base-page>
  </div>
</template>
<script>
import BasePage from '../../components/basepage/basepage'
import AvatarList from '../../components/avatarlist/avatarlist'
export default {
  data () {
    return {
      username: '',
      list: [1, 2]
    }
  },
  components: {
    BasePage,
    AvatarList
  }
}
</script>
<style lang="scss" scoped>
.invitation-container {
  height: 100%;
  .invitation-content {
    margin-top: 0.85rem;
    .text-wrapper {
      margin-bottom: 0.4rem;
    }
    .top {
      height: 0.8rem;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      .text-title {
        margin-top: 0.12rem;
        font-size: 0.24rem;
        color: #ffc000;
      }
      .text-detail {
        margin-top: 0.14rem;
        font-size: 0.18rem;
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
}
</style>
