import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
