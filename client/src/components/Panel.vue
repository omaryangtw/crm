<template>
  <div class="text-xl m-auto bg-gray-200 panel">
    <div class="text-3xl font-semibold leading-6 text-gray-900 p-4 container">
      {{ title }}
    </div>
    <div class="pt-4">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.panel {
  min-height: calc(100vh - 4rem);
}
</style>
