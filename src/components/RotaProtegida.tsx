
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/useAuth";

function RotaProtegida() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default RotaProtegida;
