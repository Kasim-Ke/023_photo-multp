import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="">
      <Link to="/">Home</Link>

      <Link to="/home_hero">home </Link>
      <Link to="/stories_hero">stories</Link>
    </div>
  );
};
