import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Diary from "./pages/Diary/Diary";
import Layout from "./components/Layout/Layout/Layout";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Products from "./pages/Products/Products";
import Exercises from "./pages/Exercices/Exercices";
import Params from "./pages/Params/Params";
import Profile from "./pages/Profile/Profile";
import Page404 from "./components/Page404/Page404";
import ExercisesSubcategoriesList from "./components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";

import { ExercisesList } from "./components/exercises/ExercisesList/ExercisesList";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Navigate to="welcome" />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signgoogle" element={<GoogleAuth />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="diary" element={<Diary />} />
            <Route path="products" element={<Products />} />
            <Route path="exercises" element={<Exercises />}>
              <Route index element={<Navigate to="bodyparts" />} />
              <Route
                path=":category"
                element={<ExercisesSubcategoriesList />}
              />
              <Route path=":category/list" element={<ExercisesList />} />
            </Route>
            <Route path="params" element={<Params />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
