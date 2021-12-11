<template>
  <div class="container">
    <div class="top">
      <Arrow v-on:click="showList" :isActive="isActive" />
      <SquareCheckbox
        :checked="colorsList.colors.every((color) => color.checked)"
        :partlyChecked="colorsList.colors.some((color) => color.checked)"
        v-on:click="toggleCheckbox"
      />
      <span v-on:click="showList"> {{ colorsList.name }} </span>
    </div>
    <ul class="drop-down-list" v-bind:class="{ active: !isActive }">
      <li v-for="color in colorsList.colors" :key="color.id">
        <ColorInput :listId="listId" :color="color" />
      </li>
    </ul>
  </div>
</template>

<script>
import ColorInput from "./Inputs/ColorInput.vue";
import SquareCheckbox from "./Inputs/SquareCheckbox.vue";
import Arrow from "./Inputs/Arrow.vue";

export default {
  name: "DropDownList",
  props: ["colorsList", "listId"],
  data: function () {
    return {
      isActive: false,
      isChecked: false,
    };
  },
  components: {
    ColorInput,
    SquareCheckbox,
    Arrow,
  },
  methods: {
    showList: function () {
      this.isActive = !this.isActive;
    },
    toggleCheckbox: function () {
      this.isChecked = !this.isChecked;
      const listId = this.$props.listId;
      this.$store.commit("toggleList", { listId, checkState: this.isChecked });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 5px;
}

.top {
  display: flex;
  justify-content: baseline;
}

.active {
  display: none;
}

.drop-down-list {
  list-style: none;
}
</style>
