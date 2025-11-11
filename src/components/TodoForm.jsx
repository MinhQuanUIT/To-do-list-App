import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Thêm công việc mới..."
        className="todo-input"
        maxLength={100}
      />
      <button type="submit" className="add-btn">
        ➕ Thêm
      </button>
    </form>
  );
}

export default TodoForm;
