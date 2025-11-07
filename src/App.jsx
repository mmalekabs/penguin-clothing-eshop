import Home from "./routes/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation.jsx";
import Authentication from "./routes/Authentication.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
