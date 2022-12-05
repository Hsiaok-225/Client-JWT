import { Navigate, Outlet, useLocation } from "react-router-dom";
import Unauthorized from "./Unauthorized";
import useAuth from "../hooks/useAuth";

export default function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("allowRoles", allowedRoles);
  return (
    <>
      {/* check allowRoles include auth.roles */}
      {/* .find() return first element */}
      {auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
      ) : auth?.user ? (
        <Unauthorized />
      ) : (
        <Navigate to="login" state={{ from: location }} replace />
      )}
    </>
  );
}

//auth?.roles?.find((role) => allowedRoles?.includes(role))
