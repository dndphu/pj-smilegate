<template>
  <nav class="header">
    <div class="header__container">
      <div class="header__left">
        <nuxt-link to="/">
          <img
            height="40"
            width="80"
            src="@/assets/images/sOCVfKv.png"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="header__right">
        <button>AAA</button>
        <button>BBB</button>
        <button>CCC</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.header {
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
  width: 100%;
  z-index: 110;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  animation: scroll-header 0.3s ease-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background-color: aquamarine;
  box-sizing: border-box;
  &__container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }
  &__right{
    button + button {
      margin-left: 8px;
    }
  }
}
@media (max-width: 1100px) {
  .header {
    padding: 0 10px;
  }
}
</style>
