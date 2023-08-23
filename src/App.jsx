import "./App.css";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Diary from "./pages/Diary/Diary";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="welcome">welcome</NavLink>
        <NavLink to="signup">signup</NavLink>
        <NavLink to="signin">signin</NavLink>
        <NavLink to="params">Params</NavLink>
        <NavLink to="diary">diary</NavLink>
        <NavLink to="products">products</NavLink>
        <NavLink to="profile">profile</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="welcome" />} />
        </Route>
        <Route path="/" element={<div>private route</div>}>
          <Route path="/diary" element={<Diary />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
