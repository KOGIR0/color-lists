<template>
  <div>
    {{ name }}
    <div v-for="color in colorsList" :key="color.id">
      <div v-if="color.checked" class="row">
        <div
          class="square"
          :style="{ backgroundColor: color.value }"
          v-for="index in color.ammount"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSquares",
  props: ["name", "colorsList"],
};
</script>

<style scoped>
.square {
  width: 10px;
  height: 10px;
  margin: 2px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
