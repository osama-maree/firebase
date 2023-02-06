import { Navigate,useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
export const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  const location=useLocation()
  if (!currentUser)//if user not logged in redirect to login page
  return <Navigate to="/login" state={({path:location.pathname})} />;

return children
};
