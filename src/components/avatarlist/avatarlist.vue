<template>
  <div class="avatar-list-container">
     <ul class="list">
       <li v-for="item in list" class="item">
         <img src="" alt="aaaa">
       </li>
     </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
  created () {
    console.log(this.list)
  }
}
</script>
<style lang="scss" scoped>
.avatar-list-container {
  .list {
    display: flex;
    justify-content: center;
    .item {
      margin-right: 0.24rem;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      background-color: aqua;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
      }
    }
  }
}
</style>
