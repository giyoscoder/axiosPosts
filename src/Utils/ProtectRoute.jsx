import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";

export default function ProtectRoute({ children }) {
  const { allow } = useContext(Context);
  const user = {
    name: "Jone",
    role: allow,
  };

  if (user.role != "admin") {
    return <Navigate to={"/login"} />;
  }
  return children;
}
