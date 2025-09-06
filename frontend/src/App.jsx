import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import About from "./pages/About";

const App = () => {
  return (

    <>
      <div class="flex h-screen bg-zinc-800 text-white">
        <Sidebar />

        <main class="flex-1 overflow-y-auto px-6 py-10">
          <section id="introduce" class="flex items-center">
            <Introduce />
          </section>

          <section id="about" class="flex items-center">
            <About />
          </section>

          <section id="contact" class="flex items-center">
            <div>Contact Me</div>
          </section>
        </main>

        <Navbar />
      </div>
    </>
  );
};

export default App;
