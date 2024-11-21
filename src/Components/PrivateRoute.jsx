import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuthContext } from '../Contexts/UserAuth';

export default function PrivateRoute(props) {
    const {isLoggedIn} =useContext(UserAuthContext)
  return (
    <div>
        {isLoggedIn ? <>{props.children}</> : <><Navigate to={"/login"}/></>}
    </div>
  )
}
