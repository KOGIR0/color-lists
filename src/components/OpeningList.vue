<template>
  <div class="opening-list">
    <div class="opening-list-top">
      <i
        class="arrow"
        v-on:click="showList()"
        v-bind:class="{ right: !isActive, down: isActive }"
      ></i>
      <SquareCheckbox
        :onClick="toggleCheckbox"
        :checked="colorsList.colors.every((color) => color.checked)"
        :partlyChecked="colorsList.colors.some((color) => color.checked)"
      />
      <span> {{ colorsList.name }} </span>
    </div>
    <ul class="dropdown-list" v-bind:class="{ active: !isActive }">
      <li v-for="color in colorsList.colors" :key="color.id">
        <ColorInput :listId="listId" :color="color" />
      </li>
    </ul>
  </div>
</template>

<script>
import ColorInput from "./ColorInput.vue";
import SquareCheckbox from "./SquareCheckbox";

export default {
  name: "OpeningList",
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
.opening-list {
  margin: 5px;
}

.opening-list-top {
  display: flex;
  justify-content: baseline;
}

.active {
  display: none;
}

.dropdown-list {
  list-style: none;
}

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
