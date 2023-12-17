import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
const Navbar = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="navbar">
        <nav style={style.navcontainer}>
          <div>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <h1>My Health</h1>
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <NavLink
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "black",
              }}
              to="/details"
            >
              Details
            </NavLink> */}
            <NavLink
              to="/login"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              Login
            </NavLink>
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              signup
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;

const style = {
  navcontainer: {
    margin: "20px 40px ",

    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
  },
};
