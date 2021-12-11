<template>
  <i
    class="checkbox"
    v-bind:class="{
      checked: checked,
    }"
  >
    <div
      class="checkbox-inner"
      v-bind:class="{
        checked: partlyChecked,
      }"
    ></div>
  </i>
</template>

<script>
export default {
  name: "SquareCheckbox",
  props: ["checked", "partlyChecked"],
};
</script>

<style scoped>
.checkbox {
  display: inline-block;
  border: 1px solid black;
  width: 12px;
  height: 12px;
  margin: 0 10px 0 10px;
}

.checkbox-inner {
  width: 4px;
  height: 4px;
  margin: auto;
  top: 4px;
  position: relative;
}

.checked {
  background-color: black;
}
</style>
