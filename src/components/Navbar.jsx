import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="w-full  h-[72px] mx-auto">
      <div className="mx-auto">
        <p className=" w-full mx-auto text-black text-4xl ">
          <Link to="/home">home </Link>

          <Link to="/stories">stories</Link>

          <Link to="/features">features</Link>
        </p>
      </div>
    </div>
  );
};
