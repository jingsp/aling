<template>
  <div class="mask-container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.mask-container {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
