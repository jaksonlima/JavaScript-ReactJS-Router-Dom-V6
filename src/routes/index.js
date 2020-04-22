import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Logon from "../pages/Logon";
import Cadastro from "../pages/Logon/Cadastro";
import CadastroIndex from "../pages/Logon/CadastroIndex";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logon" element={<Logon />}>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/:idUsuario" element={<CadastroIndex />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
