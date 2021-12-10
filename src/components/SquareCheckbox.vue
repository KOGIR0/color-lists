<template>
  <i
    class="square-checkbox"
    v-bind:class="{
      'checkbox-checked': checked,
    }"
    v-on:click="onClick"
  >
    <div
      class="square-checkbox-inner"
      v-bind:class="{
        'checkbox-checked': partlyChecked,
      }"
    ></div>
  </i>
</template>

<script>
export default {
  name: "SquareCheckbox",
  props: ["checked", "partlyChecked", "onClick"],
};
</script>

<style scoped>
.square-checkbox {
  display: inline-block;
  border: 1px solid black;
  width: 12px;
  height: 12px;
  margin: 0 10px 0 10px;
}

.square-checkbox-inner {
  width: 4px;
  height: 4px;
  left: 4px;
  top: 4px;
  position: relative;
}

.checkbox-checked {
  background-color: black;
}
</style>
