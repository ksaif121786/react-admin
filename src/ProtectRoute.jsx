import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = () => {
  let auth = {'token':localStorage.getItem('token') ? true:false}
return (
    auth.token ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectRoute;