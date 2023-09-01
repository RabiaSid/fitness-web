import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from "../pages/home"

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
            {/* <Route path="" element={}/> */}
        </Routes>
    </Router>
  )
}
