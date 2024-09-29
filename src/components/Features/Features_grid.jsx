import responsive from "./features/desktop/responsive.svg";
import nolimit from "./features/desktop/no-limit.svg";
import embed from "./features/desktop/embed.svg";
import domain from "./features/desktop/custom-domain.svg";
import boost from "./features/desktop/boost-exposure.svg";
import drop from "./features/desktop/drag-drop.svg";

export const Features_grid = () => {
  return (
    <div className="lg:max-w-[1440px] lg:h-[896px] md:max-w-[768px] md:h-[1085px] max-w-[375px] h-[1830px] mx-auto  items-center justify-center  flex  ">
      <div className="lg:w-[1110px] lg:h-[576px] md:w-[691px] md:h-[861px] w-[310px] h-[1675px]    grid lg:grid-cols-3 md:grid-rows-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[50%] md:gap-x-5">
        {/* 1 box*/}

        <div className="lg:w-[350px] lg:h-[236px] md:w-[340px] md:h-[236px]  w-[310px] h-[236px] text-center  flex flex-col justify-between  ">
          <img
            className="lg:w-[72px] mx-auto "
            src={responsive}
            alt="responsive"
          />
          {/* 1 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">100% Responsive</h4>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>
        {/* 2 box*/}
        <div className="lg:w-[350px] lg:h-[236px]  md:w-[340px] md:h-[236px] w-[310px] h-[218px] text-center  flex flex-col justify-between ">
          <img
            className="lg:w-[72px] md:mt-5 mx-auto "
            src={nolimit}
            alt="nolimit"
          />
          {/* 2 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px]  flex flex-col justify-between">
            <h4 className="lg:text-[18px]  font-bold">No Photo Upload Limit</h4>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
        </div>
        {/* 3 box*/}
        <div className="lg:w-[350px] lg:h-[236px]  md:w-[340px] md:h-[236px]  w-[310px] h-[236px] text-center  flex flex-col justify-between">
          <img className="lg:w-[72px] mx-auto " src={embed} alt="embed" />
          {/* 3 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">Available to Embed</h4>
            <p className="lg:mb-7">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>

        {/* 4 box*/}
        <div className="lg:w-[350px] lg:h-[236px] md:w-[340px] md:h-[236px]  w-[310px] h-[236px] text-center  flex flex-col justify-between">
          <img className="lg:w-[72px] mx-auto " src={domain} alt="domain" />
          {/* 4 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">Custom Domain</h4>
            <p className="lg:mb-7">
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
        </div>
        {/* 5 box*/}
        <div className="lg:w-[350px] lg:h-[236px]  md:w-[340px] md:h-[236px]  w-[310px] h-[236px] text-center  flex flex-col justify-between">
          <img className="lg:w-[72px] mx-auto " src={boost} alt="boost" />
          {/* 5 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">Boost Your Exposure</h4>
            <p className="lg:mb-7">
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
        </div>
        {/* 6 box*/}
        <div className="lg:w-[350px] lg:h-[236px]  md:w-[340px] md:h-[236px] w-[310px] h-[236px] text-center  flex flex-col justify-between">
          <img className="lg:w-[72px] mx-auto " src={drop} alt="drop" />
          {/* 6 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">Drag & Drop Image</h4>
            <p className="lg:mb-7">
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
