import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="max-w-[1440px]  h-[72px] mx-auto">
      <div className="w-[1440px] mx-auto">
        <p className=" w-full mx-auto text-black text-4xl ">
          <Link to="/home">home </Link>

          <Link to="/stories">stories</Link>
        </p>
      </div>
    </div>
  );
};
