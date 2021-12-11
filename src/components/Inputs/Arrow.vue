<template>
  <i class="arrow" v-bind:class="{ right: !isActive, down: isActive }"></i>
</template>

<script>
export default {
  name: "Arrow",
  props: ["isActive"],
};
</script>

<style scoped>
.arrow {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  margin: 4px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
