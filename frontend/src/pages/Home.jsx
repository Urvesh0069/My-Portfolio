import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Introduce from "../pages/Introduce";
import About from "../pages/About";

const Home = () => {
  return (
    <div className="flex h-screen bg-zinc-800 text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 py-10">
        <section id="introduce" className="flex items-center w-[75%] border border-red-600 ml-16">
          <Introduce />
        </section>

        <section id="about" className="flex items-center min-h-screen w-[75%] border border-red-600 ml-20">
          <About />
        </section>

        <section id="contact" className="flex items-center min-h-screen">
          <div className="text-3xl font-semibold">Contact Me</div>
        </section>
      </main>

      {/* Right Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;
