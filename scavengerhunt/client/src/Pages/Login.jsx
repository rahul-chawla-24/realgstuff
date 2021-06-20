import React from 'react'
import Login from '../Component/Login'

function LoginView({
    setUser
}) {
  return (
    <div >
        <Login setUser={setUser} />
    </div>
  );
}

export default LoginView;
