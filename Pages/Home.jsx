import Hookes from "./Hookes";
import Map from "./Map";
import Rest from "./Rest";
import { Link } from "react-router-dom";

const Home = () => {
  const navLink = [
    { id: 1, page: "Hookes", path: "/Hookes" },
    { id: 2, page: "Rest", path: "/Rest" },
    { id: 3, page: "Map", path: "/Map" },
  ];

  return (
    <div className="Nav-box">
      {navLink.map((link) => (
        <Link to={link.path} key={link.id}>
          <button>Click to {link.page}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;
