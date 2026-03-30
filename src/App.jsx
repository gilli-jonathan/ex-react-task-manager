import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
