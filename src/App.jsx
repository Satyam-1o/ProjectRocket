import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dock from "./components/Dock";
import ForYou from "./pages/ForYou";
import Saved from "./pages/Saved";
import Trending from "./pages/Trending";


export default function App() {
  return (
    <Router>
      <div className="p-0 m-0">
        <div className="md:w-[400px] p-0 m-0 mx-auto">
          <Routes>
            <Route path="/" element={<ForYou />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
          <div>
            <Dock />
          </div>
        </div>
      </div>
    </Router>
  );
}
