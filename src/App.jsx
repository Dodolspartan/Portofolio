import React, { useState, useEffect } from "react";
import "./App.css";
import Section_heading from "./component/Section_heading";
import About_Component from "./component/About_Component";
import Project_Component from "./component/Project_Component";
import Exprete_Component from "./component/Exprete_Component";
import Footer_Component from "./component/Footer_Component";
import Slide_Component from "./component/Slide_Component";
import CustomCursor from "./component/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading, bisa diganti dengan logika yang lebih kompleks
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 detik

    // Bersihkan timer saat komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="App">
      <CustomCursor />
      <Section_heading />
      <Slide_Component />
      <About_Component />
      <Project_Component />
      <Exprete_Component />
      <Footer_Component />
    </div>
  );
}

export default App;
