import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import { TasksProvider } from "./contexts/GlobalContext"

function App() {


  return (

    <TasksProvider>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={TaskList}></Route>
            <Route path="/addTask" Component={AddTask}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </TasksProvider>

  )
}

export default App
