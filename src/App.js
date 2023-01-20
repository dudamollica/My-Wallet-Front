import GlobalStyle from "./GlobalStyle";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage";
import EntriesPage from "./Pages/EntriesPage";
import ExitsPage from "./Pages/ExitsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AppContext/auth.js";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/nova-entrada" element={<EntriesPage/>} />
        <Route path="/nova-saida" element={<ExitsPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
