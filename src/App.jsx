import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Favourites from "./pages/Favourites";
import DetailGame from "./pages/DetailGame";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="game/:id" element={<DetailGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
