import Home from "./routes/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
