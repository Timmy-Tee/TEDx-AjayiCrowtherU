import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Gallery from "./pages/Gallery/Gallery";
import AboutSpeakers from "./pages/About/AboutSpeakers";
import NotFound from "./pages/404/NotFound";
import Events from "./pages/Events/Events";
import CreateBlog from "./pages/Blog/CreateBlog";
import DisplayBlog from "./pages/Blog/DisplayBlog";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/speakers" element={<AboutSpeakers />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/displayBlog/:title" element={<DisplayBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
