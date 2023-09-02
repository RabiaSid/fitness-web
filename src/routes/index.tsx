import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from "../pages/home"
import BecomeMember from "../pages/become-a-member"
import Blog from "../pages/blog"
import Contact from "../pages/contact"
import Schedule from "../pages/schedule"
import Services from "../pages/services"
import Gallery from "../pages/gallery"
import About from "../pages/about"


export default function AppRoutes() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="become-a-member" element={<BecomeMember />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="schedule" element={<Schedule />}/>
        <Route path="service" element={<Services />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="about" element={<About />}/>
        </Routes>
    </Router>
  )
}
