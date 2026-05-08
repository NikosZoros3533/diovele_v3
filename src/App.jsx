import { Route, Routes } from "react-router";
import Main from "./pages/main";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
}

export default App;
