import React from "react";
import { Link, Outlet } from "react-router-dom";

// import { Container } from './styles';

export default function Logon() {
  return (
    <>
      <Link to="/">Ir Home</Link>
      <div>Logon</div>
      <Link to="/logon/cadastro">Cadastro</Link>
      <Link to={`/logon/${10}`}>CadastroIndex</Link>
      <Outlet />
    </>
  );
}
