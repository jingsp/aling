<template>
  <div class="success-wrapper">
    <div class="content">
      <div class="img"></div>
      <div class="text-wrapper">
        <p class="main-text-color text">提交成功</p>
        <p class="main-text-color text text-margin">快邀请好友给你助力吧</p>
      </div>
      <div class="btn-wrapper">
         <button class="btn back-btn">返回首页</button>
         <button class="btn share-btn btn-margin">分享一下</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.success-wrapper {
  height: 100%;
  text-align: center;
  .img {
    margin: 1.2rem auto 0;
    width: 2rem;
    height: 2rem;
    background: url(../../assets/images/success.png);
    background-size: 100% 100%;
    opacity: 0.77;
  }
  .text-wrapper {
    margin-top: 0.44rem;
    .text {
      font-size: 0.24rem;
    }
    .text-margin {
      margin-top: 0.18rem;
    }
  }
  .btn-wrapper {
    margin-top: 0.38rem;
    font-size: 0;
    .btn {
      width: 2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      font-size: 0.24rem;
      text-align: center;
    }
    .back-btn {
      background-color: #fff;
      border: solid 2px #ffb500;
      color: #ffb500;
    }
    .share-btn {
      background-color: #ffb500;
      border: solid 2px #ffb500;
      color: #fff;
    }
    .btn-margin {
      margin-left: 0.5rem;
    }
  }
}
</style>
