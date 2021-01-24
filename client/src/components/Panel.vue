<template>
  <div class="text-xl m-auto bg-gray-200 px-10 ">
    <div class="text-3xl font-semibold leading-6 text-gray-900">
      {{ title }}
    </div>
    <div class="px-4" style="min-height:93vh ">
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
