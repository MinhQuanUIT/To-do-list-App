import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

function App() {
  // State để lưu trữ danh sách todos
  const [todos, setTodos] = useState(() => {
    // Lấy dữ liệu từ localStorage khi khởi tạo
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // State để lưu trữ filter hiện tại
  const [filter, setFilter] = useState('all');

  // Lưu todos vào localStorage mỗi khi có thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Hàm thêm todo mới
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
  };

  // Hàm toggle trạng thái hoàn thành
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Hàm xóa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Hàm chỉnh sửa todo
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Hàm xóa tất cả todos đã hoàn thành
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Lọc todos theo filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 To-Do List App</h1>
          <p className="subtitle">Quản lý công việc hiệu quả</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <Filter 
          currentFilter={filter}
          onFilterChange={setFilter}
          activeTodosCount={activeTodosCount}
          completedTodosCount={completedTodosCount}
          totalCount={todos.length}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />

        {completedTodosCount > 0 && (
          <div className="footer-actions">
            <button 
              className="clear-completed-btn"
              onClick={clearCompleted}
            >
              🗑️ Xóa {completedTodosCount} công việc đã hoàn thành
            </button>
          </div>
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 Không có công việc nào!</p>
            <p className="empty-subtitle">Thêm công việc mới để bắt đầu</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
