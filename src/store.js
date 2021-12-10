import { createStore } from 'vuex'

const initialState = [
  {
    id: '1',
    name: 'List 1',
    colors: [
      {
        id: '1',
        name: 'item 1',
        ammount: 10,
        value: '#ff0000',
        checked: false
      },
      {
        id: '2',
        name: 'item 2',
        ammount: 5,
        value: '#00ff00',
        checked: false
      },
      {
        id: '3',
        name: 'item 3',
        ammount: 13,
        value: '#0000ff',
        checked: false
      }
    ]
  },
  {
    id: '2',
    name: 'List 2',
    colors: [
      {
        id: '1',
        name: 'item 1',
        ammount: 10,
        value: '#ff0000',
        checked: false
      },
      {
        id: '2',
        name: 'item 2',
        ammount: 5,
        value: '#00ff00',
        checked: false
      },
      {
        id: '3',
        name: 'item 3',
        ammount: 13,
        value: '#0000ff',
        checked: false
      }
    ]
  },
  {
    id: '3',
    name: 'List 3',
    colors: [
      {
        id: '1',
        name: 'item 1',
        ammount: 10,
        value: '#ff0000',
        checked: false
      },
      {
        id: '2',
        name: 'item 2',
        ammount: 5,
        value: '#00ff00',
        checked: false
      },
      {
        id: '3',
        name: 'item 3',
        ammount: 13,
        value: '#0000ff',
        checked: false
      }
    ]
  },
  {
    id: '4',
    name: 'List 4',
    colors: [
      {
        id: '1',
        name: 'item 1',
        ammount: 12,
        value: '#00ffff',
        checked: false
      },
      {
        id: '2',
        name: 'item 2',
        ammount: 3,
        value: '#00ff00',
        checked: false
      },
      {
        id: '3',
        name: 'item 3',
        ammount: 3,
        value: '#0000ff',
        checked: false
      },
      {
        id: '4',
        name: 'item 4',
        ammount: 4,
        value: '#ffff00',
        checked: false
      }
    ]
  }
]

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
] */
const store = createStore({
  state () {
    return {
      listsOfColors: initialState
    }
  },
  mutations: {
    setColor (state, { listId, newColor }) {
      const colors = state.listsOfColors.find((list) => list.id === listId).colors
      const color = colors.find((color) => color.id === newColor.id)
      Object.assign(color, newColor)
    }
  }
})

export default store
