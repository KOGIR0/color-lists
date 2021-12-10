<template>
  <div class="opening-list">
    <div class="opening-list-top">
      <i
        class="arrow"
        v-on:click="showList()"
        v-bind:class="{ right: !isActive, down: isActive }"
      ></i>
      <i
        class="square-checkbox"
        v-bind:class="{
          'checkbox-checked': colorsList.colors.every((color) => color.checked),
        }"
        v-on:click="toggleCheckbox()"
      >
        <div
          class="square-checkbox-inner"
          v-bind:class="{
            'checkbox-checked': colorsList.colors.some(
              (color) => color.checked
            ),
          }"
        ></div>
      </i>
      <label> {{ colorsList.name }} </label>
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
