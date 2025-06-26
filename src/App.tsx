import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop"; 
//ffmpeg -framerate 24 -i frame_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p output.webm

const Home = lazy(() => import("./pages/Home"));
const Monitor = lazy(() => import("./pages/Monitor"));
const Platform = lazy(() => import("./pages/Platform"));
const Ai = lazy(() => import("./pages/Ai"));

function App() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-white">Loading...</div>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </Suspense>
  );
}

export default App;
