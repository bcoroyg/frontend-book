import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutAdmin, LayoutAuth, LayoutClient } from "./layouts";
import BookDetail from "./pages/client/BookDetail";
import Books from "./pages/client/Books";
import Home from "./pages/client/Home";
import Search from "./pages/client/Search";
import Login from "./pages/auth/Login";
import ListBooks from "./pages/admin/ListBooks";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/auth";
import AddBook from "./pages/admin/AddBook";
import EditBook from "./pages/admin/EditBook";

function App() {
  //Utilizar Context en el component
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <BrowserRouter>
      <AuthProvider value={[auth, setAuth]}>
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
          <Route path="/dashboard" element={<LayoutAdmin />}>
            <Route path="" element={<ListBooks />} />
            <Route path="add" element={<AddBook />} />
            <Route path="edit/:id" element={<EditBook />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
