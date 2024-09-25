import stories_hero_dektop from "./desktop/moon-of-appalacia.jpg";
import stories_hero_tablet from "./tablet/moon-of-appalacia.jpg";
import stories_hero_mobile from "./mobile/moon-of-appalacia.jpg";

export const Stories_Hero = () => {
  return (
    <div className="relative md:max-w-[1440px] md:h-[650px] max-w-[375px] h-[317px]   mx-auto">
      <img
        className="object-cover w-full h-full lg:block md:hidden sm:hidden"
        src={stories_hero_dektop}
        alt="Hero"
      />
      <img
        className="object-cover w-full h-full lg:hidden md:block sm:hidden"
        src={stories_hero_tablet}
        alt="Hero"
      />
      <img
        className="object-cover w-full h-full  md:hidden sm:block"
        src={stories_hero_mobile}
        alt="Hero"
      />
      <div className="absolute md:left-[112px] md:top-[194px] md:right-0md:bottom-[194px] md:w-[387px] md:h-[406px]  border border-solid border-white text-white font-bold pr-7 py-2 pl-2 md:flex flex-col justify-between sm:hidden ">
        <h4 className="md:text-[12px] lg:tracking-[2px] ">
          LAST MONTH’S FEATURED STORY
        </h4>
        <h1 className="md:text-[40px] md:leading-[48px] md:tracking-[4-17px]  ">
          HAZY FULL MOON OF APPALACHIA
        </h1>
        <p>
          March 2nd 2020
          <span className="text-white pl-2">by John Appleseed</span>
        </p>

        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called mountains, especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
      </div>

      <div className="w-[375px] h-[495px] bg-black flex justify-center items-center text-white md:hidden  ">
        <div className="flex flex-col w-[318px] h-[399px] justify-between border border-solid border-white  pr-7 py-2 pl-2  ">
          <h4 className="text-[12px] tracking-[2px] ">
            LAST MONTH’S FEATURED STORY
          </h4>
          <h1 className="text-[32px] leading-[40px] tracking-[4-17px] tee  ">
            HAZY FULL MOON OF APPALACHIA
          </h1>
          <p>
            March 2nd 2020
            <span className="text-white pl-2">by John Appleseed</span>
          </p>

          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called mountains, especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
        </div>
      </div>
    </div>
  );
};
