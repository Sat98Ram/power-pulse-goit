import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { Navigate, Route, Routes } from "react-router-dom";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import Loader from "./components/Loader/Loader";

const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Diary = lazy(() => import("./pages/Diary/Diary"));
const Layout = lazy(() => import("./components/Layout/Layout/Layout"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const Products = lazy(() => import("./pages/Products/Products"));
const Exercises = lazy(() => import("./pages/Exercices/Exercices"));
const Params = lazy(() => import("./pages/Params/Params"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Page404 = lazy(() => import("./components/Page404/Page404"));
const ExercisesSubcategoriesList = lazy(() =>
  import(
    "./components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList"
  )
);
const ExercisesList = lazy(() =>
  import("./components/exercises/ExercisesList/ExercisesList")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
