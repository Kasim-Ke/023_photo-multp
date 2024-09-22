import img1_dektop from "./desktop/mountains.jpg";

import img2_dektop from "./desktop/cityscapes.jpg";

import img3_dektop from "./desktop/18-days-voyage.jpg";

import img4_dektop from "./desktop/architecturals.jpg";

export const Home_Grid = () => {
  return (
    <div className="lg:max-w-[1440px] lg:h-full mx-auto flex text-white bg-slate-500 ">
      <div className="lg:w-[360px] lg:h-full relative hover:tracking-widest hover:-translate-y-6 hover:bg-[white] hover:bg-opacity-35  duration-300   ">
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[black] bg-opacity-35 hover:bg-opacity-0 ease-in duration-300"></div>
        <div className="absolute bottom-0 "> wwe</div>
        <img className="object-cover " src={img1_dektop} alt="img1_dektop" />
      </div>

      <div className="lg:w-[360px] lg:h-full relative">
        <div className=" absolute bottom-0 "> sddssd</div>
        <img className="object-cover " src={img2_dektop} alt="img1_dektop" />
      </div>
      <div className="lg:w-[360px] lg:h-[500px]">
        <img className="object-cover " src={img3_dektop} alt="img1_dektop" />
      </div>
      <div className="lg:w-[360px] lg:h-[500px]">
        <img className="object-cover " src={img4_dektop} alt="img1_dektop" />
      </div>
    </div>
  );
};
