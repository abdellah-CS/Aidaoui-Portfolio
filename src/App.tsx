import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { SocialBar } from "./hoc";
import Project from "./components/sections/Project";
import { projects } from "./constants/index";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 h-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route path="/about" element={<>
                <About />
                <Tech />
                <Experience />
                {/* <Feedbacks /> */}
              </>} />
          <Route path="/projects" element={<Works />} />
          <Route
            path="/contact"
            element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            }
          />
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/projects/${project.name}`}
              element={<Project project={project} />}
            />
          ))}
        </Routes>
        <SocialBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
