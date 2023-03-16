import { Route, Routes } from "react-router-dom";
import { InfoPage } from "./pages/InfoPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/info/:id" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
