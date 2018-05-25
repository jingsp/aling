<template>
  <div class="infoadd-container">
     <div class="banner">
       <img src="../../assets/images/banner.png" alt="">
     </div>
     <div class="form-wrapper">
        <van-cell-group>
          <van-field
            v-model="username"
            label="姓名"
            placeholder="请输入姓名"
            @click-icon="username = ''"
          />
        <van-field
          v-model="region"
          label="所在地区"
          placeholder="请选择所在地区"
          icon="arrow"
        />
        <van-field
          v-model="address"
          label="详细地址"
          placeholder="请输入详细地址"
        />
        <van-field
          v-model="tel"
          label="手机号码"
          placeholder="请输入手机号码"
        />
      </van-cell-group>
     </div>
     <div class="tips">
        <p class="main-text-color big-text">完成填写，即有机会获取乐事薯片一份</p>
        <p class="small-text">注：信息一经提交，不可修改</p>
     </div>
     <div class="btn-wrapper">
         <button class="btn">提交</button>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      age: ''
    }
  }
}
</script>
<style lang="scss">
.infoadd-container {
  input::-webkit-input-placeholder {
    text-align: right;
  }
  .van-cell {
    padding: 0.16rem 0.3rem;
  }
  .van-field__icon {
    display: block !important;
  }
  .van-icon:before {
    display: inline-block;
  }
  .van-icon-arrow:before {
    content: "\F006";
  }
  .van-cell {
    color: #666;
    font-size: 0.24rem;
  }
}
</style>

<style lang="scss" scoped>
.infoadd-container {
  height: 100%;
  overflow-y: scroll;
  background-color: #ededed;
  input::-webkit-input-placeholder {
    font-size: 0.24rem;
    color: #cccccc;
    text-align: right;
  }
  .banner {
    width: 100%;
    height: 4.5rem;
    img {
      height: 4.5rem;
    }
  }
  .tips {
    margin-top: 0.55rem;
    .big-text {
      font-size: 0.24rem;
      text-align: center;
    }
    .small-text {
      margin-top: 0.2rem;
      font-size: 0.2rem;
      color: #999999;
      text-align: center;
    }
  }
  .btn-wrapper {
    margin-top: 0.35rem;
    // margin-bottom: 0.4rem;
    text-align: center;
    .btn {
      width: 3.4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.24rem;
      text-align: center;
      color: #fff;
      background-color: #ffb500;
      border-radius: 0.3rem;
    }
  }
}
</style>
