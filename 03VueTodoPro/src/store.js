import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      { 
        id: 1, 
        title: 'MIT',
        items: [
          { id: 1, listId: 1, title: 'Do this thing.', done: false },
          { id: 2, listId: 1, title: 'Do another thing.', done: false },
          { id: 3, listId: 1, title: 'Do many, many things.', done: false },
          { id: 4, listId: 1, title: 'This thing is done!', done: true }
        ]
      },
      {
        id: 2,
        title: 'Shopping',
        items: [
          { id: 1, listId: 2, title: 'Coffee', done: false },
          { id: 2, listId: 2, title: 'Iced Coffee', done: false },
          { id: 3, listId: 2, title: 'Chocolate-Coated Coffee Beans', done: false },
          { id: 4, listId: 2, title: 'Coffee Flavoured Body Wash', done: false },
        ]
      }
    ]
  },
  mutations: {
    ADD_TODO: function(state, todo) {
      var list = state.lists.find(l => l.id === todo.listId);
      list.items.push(todo);
    }
  },
  actions: {
    addTodo: function(commit, todo) {
      commit('ADD_TODO', todo);
    }
  }
})
