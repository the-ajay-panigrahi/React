import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    setUser({ userName, password });
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="User Name"
      />

      <br />

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      <br />
      <br />
    </div>
  );
}

export default Login;
