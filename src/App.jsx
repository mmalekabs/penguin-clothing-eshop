import Home from "./routes/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation.jsx";
import SignIn from "./routes/SignIn.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
