<template>
  <div id="app">
    <OpeningList v-for="list in listsOfColors" :listId="list.id" :key="list.id" :colorsList="list"/>
    <ListSquares />
  </div>
</template>

<script>
import OpeningList from './components/OpeningList.vue'
import ListSquares from './components/ListSquares.vue'

export default {
  name: 'App',
  data: function () {
    return {
      listsOfColors: this.$store.state.listsOfColors
    }
  },
  components: {
    OpeningList,
    ListSquares
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  flex-direction: row;
}
</style>
