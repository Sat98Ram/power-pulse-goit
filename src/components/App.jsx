import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>home</div>} />
      </Routes>
    </>
  );
}

export default App;
