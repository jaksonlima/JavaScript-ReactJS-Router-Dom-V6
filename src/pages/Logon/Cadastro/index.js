import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

export default function Cadastro() {
  return (
    <>
      <div>Cadastro</div>
      <Link to={`logon/${10}`}>Ir CadastroIndex</Link>
    </>
  );
}
