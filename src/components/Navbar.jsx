import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="">
      <Link to="/home">home </Link>
      <Link to="/stories_hero">stories</Link>
    </div>
  );
};
