import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutAuth, LayoutClient } from "./layouts";
import BookDetail from "./pages/client/BookDetail";
import Books from "./pages/client/Books";
import Home from "./pages/client/Home";
import Search from "./pages/client/Search";
import Login from "./pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="search/:query" element={<Search />} />
          <Route exact path="" element={<Home />} />
        </Route>
        <Route path="/" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
