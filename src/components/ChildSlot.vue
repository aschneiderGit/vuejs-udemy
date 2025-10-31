<template>
  <h3>Here is the text</h3>
  <slot name="text"></slot>
  <div>
    <h3>Here is the image</h3>
    <slot name="img"></slot>
  </div>
</template>
<script>
export default {
  name: "ChildSlot",
  props: {
    data: String,
  },
};
</script>
<style scoped>
h1 {
  font-size: small;
}
</style>
