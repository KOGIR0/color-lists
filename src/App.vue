<template>
  <OpeningList />
</template>

<script>
import OpeningList from "./components/OpeningList.vue";

export default {
  name: "App",
  components: {
    OpeningList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
