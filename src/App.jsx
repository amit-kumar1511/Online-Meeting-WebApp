

import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Room from "./Components/Room/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
}

export default App;