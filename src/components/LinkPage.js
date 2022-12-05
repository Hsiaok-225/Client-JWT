import { Link } from "react-router-dom";

export default function LinkPage() {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h1>Public</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <br />
      <h1>Private</h1>
      <Link to="/">home</Link>
      <Link to="/editor">Editors Page</Link>
      <Link to="/admin">Admin</Link>
    </section>
  );
}
