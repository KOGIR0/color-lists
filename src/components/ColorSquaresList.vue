<template>
  <div class="squares-list">
    <div v-on:click="toggleShuffle">
      {{ name }}
    </div>
    <div :class="{ row: shuffled }">
      <div v-for="(color, index) in colors" :key="index">
        <div v-if="color.checked" class="row">
          <div
            class="square"
            :style="{ backgroundColor: color.value }"
            v-for="index in color.ammount"
            :key="index"
            v-on:click="removeElement(color.id)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorSquaresList",
  data: function () {
    return {
      shuffled: false,
    };
  },
  props: ["name", "colorsList"],
  methods: {
    removeElement: function (id) {
      const color = this.$props.colorsList.colors.find(
        (color) => color.id === id
      );
      const newColor = Object.assign({}, color);
      newColor.ammount--;
      this.$store.commit("setColor", {
        listId: this.colorsList.id,
        newColor,
      });
    },
    toggleShuffle: function () {
      this.shuffled = !this.shuffled;
    },
    shuffle: function (array) {
      let currentIndex = array.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
  computed: {
    colors: {
      get() {
        if (this.shuffled) {
          let array = [];
          const colors = this.$props.colorsList.colors;

          colors.forEach((color) => {
            const n = color.ammount;
            const newColor = Object.assign({}, color);
            newColor.ammount = 1;
            for (let i = 0; i < n; i++) {
              array = [...array, newColor];
            }
          });

          return this.shuffle(array);
        } else {
          return this.$props.colorsList.colors;
        }
      },
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
