import { Navigate , Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";



const ProtectedRoute = ({
    // isAllowed,
    userData,
    redirectPath ,
    children
}) => {
    // const {userData} = useSelector((state)=>state.user)
    // useEffect(() => {
    //     console.log(user)
    // }, [user])
    
    // if (!isAllowed) {
    if (!userData) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet/>
    // return children ? children : <Outlet />;
  };

  export default ProtectedRoute;