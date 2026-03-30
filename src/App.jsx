import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={TaskList}></Route>
          <Route path="/addTask" Component={AddTask}></Route>
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
