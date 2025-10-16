import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home"); // default page

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);


  return (
    <div>
      <Navbar setPage={setPage} />

      {/* Render pages based on state */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
