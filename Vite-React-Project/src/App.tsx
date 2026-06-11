import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NoteDetails } from "./pages/noteDetails";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes/:id" element={<NoteDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;