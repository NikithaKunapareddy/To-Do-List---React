import { useState } from 'react'
import Todo from '../components/Todo'

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
        },
      ])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="todo-list-main">
      <form onSubmit={addTodo} className="flex items-center mb-8">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="✨ Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">
          Add Todo
        </button>
      </form>

      <div className="todo-items-scroll">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {todos.length === 0 ? (
            <li style={{ textAlign: 'center', color: '#888', fontSize: '1.3rem', marginTop: '2rem' }}>
              Your todo list is empty! ✨<br />
              <span style={{ fontSize: '1rem', color: '#bbb' }}>Add your first todo above to get started</span>
            </li>
          ) : (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </ul>
      </div>

      {todos.length > 0 && (
        <div className="stats-container">
          <span>✨ {todos.length} items total</span>
          <span>🎉 {todos.filter((todo) => todo.completed).length} completed</span>
        </div>
      )}
    </div>
  )
} 