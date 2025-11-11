import './Filter.css';

function Filter({ currentFilter, onFilterChange, activeTodosCount, completedTodosCount, totalCount }) {
  return (
    <div className="filter-container">
      <div className="filter-stats">
        <span className="stat-item">
          Tổng: <strong>{totalCount}</strong>
        </span>
        <span className="stat-item active-stat">
          Đang làm: <strong>{activeTodosCount}</strong>
        </span>
        <span className="stat-item completed-stat">
          Hoàn thành: <strong>{completedTodosCount}</strong>
        </span>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          📋 Tất cả
        </button>
        <button
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          ⏳ Đang làm
        </button>
        <button
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          ✅ Hoàn thành
        </button>
      </div>
    </div>
  );
}

export default Filter;
