import { NavLink } from "react-router-dom";

function Navigation() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav>
      <NavLink style={style} className="px-6 py-5" to="/home">
        Home
      </NavLink>
      <NavLink style={style} className="px-6 py-5" to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}

export default Navigation;
