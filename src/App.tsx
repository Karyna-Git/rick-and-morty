import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/LoginPage";
import { InfoPage } from "./pages/InfoPage";
import { MainPage } from "./pages/MainPage";
import { useAppSelector } from "./store/hooks";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_PROVIDER_ID } from "./constants";

function App() {
  const profile = useAppSelector((state) => state.user.profile);
  console.log(profile)

  return (
    <>
      {profile ? (
        <Routes>
          <Route path="/rick-and-morty" element={<MainPage />} />
          <Route path="/info/:id" element={<InfoPage />} />
        </Routes>
      ) : (
        <GoogleOAuthProvider clientId={GOOGLE_PROVIDER_ID}>
          <SignIn />
        </GoogleOAuthProvider>
      )}
    </>
  );
}

export default App;
