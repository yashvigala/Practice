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
  return (
    <div className="flex min-h-screen items-start justify-center bg-muted/30 p-6">
      <Card className="mt-16 w-full max-w-md">
        <CardHeader>
          <CardTitle>My Todos</CardTitle>
          <CardDescription>
            Static preview — we'll make it live with Convex next.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Add-todo row */}
          <div className="flex gap-2">
            <Input placeholder="Add a new todo..." />
            <Button type="button">Add</Button>
          </div>

          {/* Todo list */}
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 rounded-lg border p-3">
              <Checkbox id="t1" defaultChecked />
              <Label htmlFor="t1" className="text-muted-foreground line-through">
                Learn Convex basics
              </Label>
            </li>
            <li className="flex items-center gap-3 rounded-lg border p-3">
              <Checkbox id="t2" />
              <Label htmlFor="t2">Build the todo UI</Label>
            </li>
            <li className="flex items-center gap-3 rounded-lg border p-3">
              <Checkbox id="t3" />
              <Label htmlFor="t3">Wire it to the database</Label>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
