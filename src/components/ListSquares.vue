<template>
  <div class="squares-list">
    {{ name }}
    <div v-for="color in colorsList.colors" :key="color.id">
      <div v-if="color.checked" class="row">
        <div
          class="square"
          :style="{ backgroundColor: color.value }"
          v-for="index in color.ammount"
          :key="index"
          v-on:click="removeElement(color)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSquares",
  props: ["name", "colorsList"],
  methods: {
    removeElement: function (color) {
      color.ammount--;
      this.$store.commit("setColor", { listId: this.colorsList.id, color });
    },
  },
};
</script>

<style scoped>
.squares-list {
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
}

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
