import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutClient } from "./layouts";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route exact path="" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
