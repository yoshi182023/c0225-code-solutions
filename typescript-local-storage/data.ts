/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todoJSON = JSON.stringify(todos);
  localStorage.setItem('todo-storage', todoJSON);
}

function readTodos(): Todo[] {
  const todoJSON = localStorage.getItem('todo-storage');
  if (todoJSON) {
    return JSON.parse(todoJSON);
  }
  return [];
}
