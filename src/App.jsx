import { NavLink, Navigate, Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary/Diary";
import Layout from "./components/Layout/Layout/Layout";

function App() {
  return (
    <>
      <nav className="tempNav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="signup">Signup</NavLink>
        <NavLink to="signin">Signin</NavLink>
        <NavLink to="params">Params</NavLink>
        <NavLink to="diary">Diary</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="profile">
          Profile <button type="button">button</button>
        </NavLink>
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
