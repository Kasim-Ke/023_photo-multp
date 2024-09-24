import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="w-full h-[72px] mx-auto">
      <p className=" w-full mx-auto">
        <Link to="/home">home </Link>
        <Link to="/stories_hero">stories</Link>
      </p>
    </div>
  );
};
