import React from "react";
import { useParams } from "react-router-dom";

// import { Container } from './styles';

export default function CadastroIndex() {
  const { idUsuario } = useParams();
  return <div>CadastroIndex {idUsuario}</div>;
}
