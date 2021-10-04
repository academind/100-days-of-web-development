const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: '',
      editedTodoId: null
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        // Updating...
        const todoId = this.editedTodoId;
        const todoIndex = this.todos.findIndex(function(todoItem) {
          return todoItem.id === todoId;
        });

        const updatedTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText
        };

        this.todos[todoIndex] = updatedTodoItem;
        this.editedTodoId = null;
      } else {
        // Creating...
        const newTodo = {
          text: this.enteredTodoText,
          id: new Date().toISOString()
        };
        this.todos.push(newTodo);
      }

      this.enteredTodoText = '';
    },
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function(todoItem) {
        return todoItem.id === todoId;
      });
      this.enteredTodoText = todo.text;
    }
  }
};

Vue.createApp(TodosApp).mount('#todos-app');