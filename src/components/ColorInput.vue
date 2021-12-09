<template>
    <div>
        <input type="checkbox">
        <span class="checkbox-square"></span>
        {{ name }}
        <input v-model="number" type="number">
        <input type="color">
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            number: 0,
        }
    },
    name: "ColorInput",
    props: ['name'],
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