<template>
  <ul>
    <div>
      <i
        class="arrow"
        v-on:click="showList()"
        v-bind:class="{ right: !isActive, down: isActive }"
      ></i>
      <i
        class="square-checkbox"
        v-bind:class="{ 'checkbox-checked': isChecked }"
        v-on:click="toggleCheckbox()"
      ></i>
      <label> {{colorsList.name}} </label>
      <ul class="dropdown-list" v-bind:class="{ active: !isActive }">
        <li v-for="color in colorsList.colors" :key="color.id">
          <ColorInput :listId="listId" :color="color"/>
        </li>
      </ul>
    </div>
  </ul>
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
    },
  },
};
</script>

<style>
.square-checkbox {
  display: inline-block;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  margin: 0 5px 0 5px;
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
  margin: 2px;
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
