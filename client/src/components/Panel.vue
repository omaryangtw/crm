<template>
  <div class="text-xl m-auto bg-gray-200 pl-8 pr-8 pt-3">
    <div class="text-3xl font-semibold leading-6 text-gray-900">
      {{ title }}
    </div>
    <div class="px-4 mt-4">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style></style>
