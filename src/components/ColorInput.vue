<template>
    <div>
        <input type="checkbox">
        <span class="checkbox-square"></span>
        {{ color.name }}
        <input v-model="colorNum" type="number">
        <input type="color">
    </div>
</template>

<script>
export default {
    name: "ColorInput",
    props: ['listId', 'color'],
    computed: {
        colorNum: {
            get() {
                return this.$props.color.ammount;
            },
            set(value) {
                const listId = this.$props.listId;
                const colorId = this.$props.color.id;
                console.log(listId, colorId);
                this.$store.commit('setColorValue', {
                    listId,
                    colorId,
                    value
                })
            }
        }
    }
}
</script>

<style>

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