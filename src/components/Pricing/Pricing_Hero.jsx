import Pricing_hero_dektop from "./pricing/desktop/hero.jpg";
import Pricing_hero_tablet from "./pricing/tablet/hero.jpg";
import Pricing_hero_mobile from "./pricing/mobile/hero.jpg";

export const Pricing_Hero = () => {
  return (
    <div className="lg:max-w-[1440px]  lg:h-[651px]  md:max-w-[768px] md:h-[491px]  max-w-[375px] h-[594px]  mx-auto  ">
      <div className=" flex flex-col   ">
        {/*/////////////////  Row 1 ///////////////// */}
        <div
          className="flex md:flex-row flex-col-reverse  "
          data-aos="fade-down"
        >
          {/* Row 1 text box */}
          <div className="lg:w-[610px] lg:h-[650px] justify-center items-center md:w-[495px] md:h-[490px] md:flex-row w-[375px] h-[300px] flex-col text-left flex  text-white  bg-black ">
            <div className="flex flex-col justify-between items-start md:w-[387px] md:h-[144px] w-[318px] h-[156px]  ">
              <h1 className="md:text-[40px] md:leading-[48px] md:tracking-[4.17px] text-[32px] leading-[40px] tracking-[3.33px]  uppercase font-bold  ">
                PRICING
              </h1>
              <p>
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
          <div>
            {/* Row 1 DEKTOP IMAGE*/}
            <img
              className="w-[830px] lg:block hidden h-[650px]   object-cover "
              src={Pricing_hero_dektop}
              alt="Home_img1_desktop "
            />
            {/* Row 1 TABLET IMAGE*/}
            <img
              className=" md:block lg:hidden sm:hidden  mw-[273px] h-[490px] object-cover "
              src={Pricing_hero_tablet}
              alt="Home_img2_tablet"
            />
            {/* Row 1 MOBILE IMAGE*/}
            <img
              className="md:hidden block w-[375px] h-[294px]"
              src={Pricing_hero_mobile}
              alt="Home_img1_mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
