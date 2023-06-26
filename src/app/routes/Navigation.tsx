import React from "react";
//Router
import { Route, Routes, Navigate } from "react-router-dom";
//Components
import { SearchBox, SearchDetails, SearchResults } from "../components";
import { Login } from "../auth/Components/Login";
import { Home } from "../auth/Components/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import { AppRoutes } from "./AppRoutes";

export const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBox />}>
          <Route path="items" element={<SearchResults />} />
          <Route path="items/:id" element={<SearchDetails />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="home/*"
          element={
            <PrivateRoutes>
              <AppRoutes></AppRoutes>
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
