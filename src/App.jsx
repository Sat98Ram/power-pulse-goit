import { NavLink, Navigate, Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary/Diary";
import Layout from "./components/Layout/Layout/Layout";
import Welcome from "./pages/Welcome/Welcome";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Products from "./pages/Products/Products";
import Exercises from "./pages/Exercices/Exercices";
import Params from "./pages/Params/Params";
import Profile from "./pages/Profile/Profile";

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
        <NavLink to="exercises">Exercises</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<div>public route</div>}> */}
          <Route index element={<Navigate to="welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* </Route> */}

          {/* <Route path="/" element={<div>private route</div>}> */}
          <Route index element={<Navigate to="diary" />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/products" element={<Products />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/params" element={<Params />} />
          <Route path="/profile" element={<Profile />} />
          {/* </Route> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
