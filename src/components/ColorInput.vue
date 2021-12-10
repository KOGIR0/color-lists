<template>
  <div>
    <input type="checkbox" v-model="isChecked" />
    {{ color.name }}
    <input v-model="colorNum" type="number" />
    <input type="color" v-model="colorValue" />
  </div>
</template>

<script>
export default {
  name: "ColorInput",
  props: ["listId", "color"],
  computed: {
    colorNum: {
      get() {
        return this.$props.color.ammount;
      },
      set(value) {
        const listId = this.$props.listId;
        const color = this.$props.color;
        color.ammount = value;
        this.$store.commit("setColor", {
          listId,
          newColor: color,
        });
      },
    },
    colorValue: {
      get() {
        return this.$props.color.value;
      },
      set(value) {
        const listId = this.$props.listId;
        const color = this.$props.color;
        color.value = value;
        this.$store.commit("setColor", {
          listId,
          newColor: color,
        });
      },
    },
    isChecked: {
      get() {
        return this.$props.color.checked;
      },
      set(value) {
        const listId = this.$props.listId;
        const color = this.$props.color;
        color.checked = value;
        this.$store.commit("setColor", {
          listId,
          newColor: color,
        });
      },
    },
  },
};
</script>

<style scoped>
input[type="number"] {
  margin: 10px;
  border: none;
  text-align: right;
  margin-right: 0;
}

input[type="number"]:focus-visible {
  border: none;
  outline: none;
}

input[type="color"] {
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 2px 4px;
}
</style>
