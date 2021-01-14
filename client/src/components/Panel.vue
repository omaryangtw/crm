<template>
  <div class="border-black border text-xl mx-4 my-4">
    <div class="text-white font-semibold bg-green-500">
      {{ title }}
    </div>
    <div class="px-4">
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
