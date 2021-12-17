import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link className="btn-home" to="/">Home</Link>
        <Link className="btn-new-blog" to="/create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
