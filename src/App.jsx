import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Favourites from "./pages/Favourites";
import DetailGame from "./pages/DetailGame";
import Homepage from "./pages/Homepage";
import Comparatore from "./pages/Comparatore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="game/:id" element={<DetailGame />} />
          <Route path="diff" element={<Comparatore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
