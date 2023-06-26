import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
export const PrivateRoutes = ({ children }: Props) => {
  return children;
};
