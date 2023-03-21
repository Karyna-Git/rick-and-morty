import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/login/SignIn";
import { InfoPage } from "./pages/InfoPage";
import { MainPage } from "./pages/MainPage";
import { useAppSelector } from "./store/hooks";

function App() {
  const profile = useAppSelector((state) => state.user.profile);

  return (
    <>
      {profile ? (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info/:id" element={<InfoPage />} />
        </Routes>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
