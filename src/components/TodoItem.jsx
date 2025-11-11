import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span 
            className="todo-text"
            onDoubleClick={() => !todo.completed && setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {!isEditing && !todo.completed && (
          <button
            onClick={() => setIsEditing(true)}
            className="edit-btn"
            title="Chỉnh sửa"
          >
            ✏️
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
          title="Xóa"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
