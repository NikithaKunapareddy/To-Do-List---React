interface TodoProps {
  id: number
  text: string
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function Todo({ id, text, completed, onToggle, onDelete }: TodoProps) {
  return (
    <li className="todo-item group">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
            className="todo-checkbox"
            style={{ width: '1.3rem', height: '1.3rem', accentColor: '#ff69b4', cursor: 'pointer', transition: 'accent-color 0.2s' }}
          />
          <span className={completed ? 'todo-complete' : ''} style={{ fontSize: '1.1rem', transition: 'color 0.2s' }}>
            {text}
          </span>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="todo-delete-btn"
          title="Delete todo"
        >
          🗑️
        </button>
      </div>
    </li>
  )
} 