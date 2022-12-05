import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    navigate("linkpage");
  };

  return (
    <section>
      <h1>Home</h1>
      <p>You are logged in!</p>
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </section>
  );
}
