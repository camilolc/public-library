import React from "react";
import { Home } from "../auth/Components/Home";
import { Route, Routes } from "react-router-dom";
import { CrearLibro } from "../components/sidebar/CrearLibro";
import { StockLibros } from "../components/sidebar/StockLibros";
import { ListarLibros } from "../components/sidebar/ListarLibros";
import { GestionarSolicitudes } from "../components/sidebar/GestionarSolicitudes";
import { HistoricoSolicitudes } from "../components/sidebar/HistoricoSolicitudes";
import { VerClientes } from "../components/sidebar/VerClientes";
import { Prestamos } from "../components/sidebar/Prestamos";

export const AppRoutes = () => {
  return (
    <>
      <Home />

      <Routes>
        <Route path="crear-libro" element={<CrearLibro />}></Route>
        <Route path="stock-libros" element={<StockLibros />}></Route>
        <Route path="listar-libros" element={<ListarLibros />} />
        <Route path="ges-solic" element={<GestionarSolicitudes />} />
        <Route path="his-solic" element={<HistoricoSolicitudes />} />
        <Route path="clientes" element={<VerClientes />} />
        <Route path="prestamos" element={<Prestamos />} />
      </Routes>
    </>
  );
};
