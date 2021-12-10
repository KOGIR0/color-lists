import { createStore } from 'vuex'

const initialState = [
    {
        id: "1",
        name: "List 1",
        colors: [
            {
                id: "1",
                name: "item 1",
                ammount: 10,
                value: "red",
                checked: false
            },
            {
                id: "2",
                name: "item 2",
                ammount: 5,
                value: "green",
                checked: false
            },
            {
                id: "3",
                name: "item 3",
                ammount: 13,
                value: "blue",
                checked: false
            }
        ]
    },
    {
        id: "2",
        name: "List 2",
        colors: [
            {
                id: "1",
                name: "item 1",
                ammount: 10,
                value: "red",
                checked: false
            },
            {
                id: "2",
                name: "item 2",
                ammount: 5,
                value: "green",
                checked: false
            },
            {
                id: "3",
                name: "item 3",
                ammount: 13,
                value: "blue",
                checked: false
            }
        ]
    },
    {
        id: "3",
        name: "List 3",
        colors: [
            {
                id: "1",
                name: "item 1",
                ammount: 10,
                value: "red",
                checked: false
            },
            {
                id: "2",
                name: "item 2",
                ammount: 5,
                value: "green",
                checked: false
            },
            {
                id: "3",
                name: "item 3",
                ammount: 13,
                value: "blue",
                checked: false
            }
        ]
    },
    {
        id: "4",
        name: "List 4",
        colors: [
            {
                id: "1",
                name: "item 1",
                ammount: 12,
                value: "yellow",
                checked: false
            },
            {
                id: "2",
                name: "item 2",
                ammount: 3,
                value: "green",
                checked: false
            },
            {
                id: "3",
                name: "item 3",
                ammount: 3,
                value: "blue",
                checked: false
            },
            {
                id: "4",
                name: "item 4",
                ammount: 4,
                value: "orange",
                checked: false
            }
        ]
    }
];

/* ColorLists = [
    List: {
        id: String,
        name: String,
        colors: [
            Color: {
                id: String,
                name: String,
                ammount: number,
                value: rgb,
                checked: bool
            }
        ]
    }
]*/
const store = createStore({
    state () {
      return {
        listsOfColors: initialState
      }
    },
    mutations: {
      setColorValue(state, {listId, colorId, value}) {
        let colors = state.listsOfColors.find((list) => list.id === listId).colors;
        let color = colors.find((color) => color.id == colorId);
        color.ammount = value;
      },
      toggleColor(state, {listId, colorId}) {
        let colors = this.state.listsOfColors.find((list) => list.id === listId).colors;
        let color = colors.find((color) => color.id == colorId);
        color.checked = !color.checked;
      }
    }
});

export default store;