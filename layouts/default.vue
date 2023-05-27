<template>
  <div>
    <Header></Header>
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
const Header = defineAsyncComponent(
  () => import("@/components/layouts/Header.vue")
);
</script>

<style scoped lang="scss">
// :where(header + div) {
//   margin-top: 60px;
// }
</style>
