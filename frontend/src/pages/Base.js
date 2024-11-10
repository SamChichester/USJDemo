import { Outlet, Link } from "react-router-dom";

const Base = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/members">Members</Link>
            </li>
            </ul>
        </div>
        </nav>
        <Outlet />
    </>
  );
};

export default Base;