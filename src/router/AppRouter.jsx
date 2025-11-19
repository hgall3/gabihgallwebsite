import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout"; 
import Home from "../pages/Home/Home";
import About from "../pages/Project/About";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}
