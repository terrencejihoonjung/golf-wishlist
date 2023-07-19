import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link className="px-6 py-2" to="/home">
        Home
      </Link>
      <Link className="px-6 py-2" to="/profile">
        Profile
      </Link>
    </nav>
  );
}

export default Navigation;
