const TodosApp = {
  data() {
    return {
      newTodo: 'Learn Vue.js!'
    };
  }
};

Vue.createApp(TodosApp).mount('#todos-app');