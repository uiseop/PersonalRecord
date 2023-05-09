import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default WebRouter;
