import { useState } from 'react'
import { useQuery, useMutation } from 'convex/react'
import { XIcon } from 'lucide-react'
import { api } from '../convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

function App() {
  // Reactive read: re-renders automatically whenever todos change.
  const todos = useQuery(api.todos.list)
  // Writers: each returns a function we call to run the mutation.
  const addTodo = useMutation(api.todos.add)
  const toggleTodo = useMutation(api.todos.toggle)
  const removeTodo = useMutation(api.todos.remove)

  const [text, setText] = useState('')

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    addTodo({ text: trimmed })
    setText('')
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-muted/30 p-6">
      <Card className="mt-16 w-full max-w-md">
        <CardHeader>
          <CardTitle>My Todos</CardTitle>
          <CardDescription>
            Live data from Convex — add one and watch it persist.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Add-todo row (submitting the form also works with Enter) */}
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              handleAdd()
            }}
          >
            <Input
              placeholder="Add a new todo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit">Add</Button>
          </form>

          {/* Todo list — three states: loading, empty, and populated */}
          {todos === undefined ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : todos.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No todos yet. Add your first one! ✨
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {todos.map((todo) => (
                <li
                  key={todo._id}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <Checkbox
                    id={todo._id}
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo({ id: todo._id })}
                  />
                  <Label
                    htmlFor={todo._id}
                    className={
                      todo.completed
                        ? 'flex-1 text-muted-foreground line-through'
                        : 'flex-1'
                    }
                  >
                    {todo.text}
                  </Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Delete todo"
                    onClick={() => removeTodo({ id: todo._id })}
                  >
                    <XIcon />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default App
