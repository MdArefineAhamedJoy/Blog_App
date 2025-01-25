import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Options } from "@splidejs/splide";
import { useNavigate } from "react-router-dom";

interface BannerSlide {
  image: string;
  link: string;
}

const bannerData: BannerSlide[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/442a/c826/9edc45cc113af20d98b915107533ec06?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpBYD-fd~P~g-YcXC6wm-bf7ZdfVVKsGujO5KjK6l94075BgaHGWxCrJwBl209nO3vF0o7d-VM2kURhdolKL70mUu9XzrowXEt7dJ9GeJnnN35BubdnnmcQ~mcnk73lJ~f1VKWpGOGuiURkiFSmVMkJ893WrY3t7oovH~y95ZvYboXtVqf4DxrHn6rZcunu93wBXv32mMK0EI4H8qxCMD28hlqjhVDwvt1s7SeOAbbMGzcIE4k6dnn-zcvLOSFNX4bkTVhsN~rmEdw~vshK7F3O7gY7C3ovl4hL67u7Muc1zfbovmx8R33Bo47NHsbSPYmLIMos0TxpxeJaw4INVHw__",
    link: "/blog/post-holiday-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/442a/c826/9edc45cc113af20d98b915107533ec06?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpBYD-fd~P~g-YcXC6wm-bf7ZdfVVKsGujO5KjK6l94075BgaHGWxCrJwBl209nO3vF0o7d-VM2kURhdolKL70mUu9XzrowXEt7dJ9GeJnnN35BubdnnmcQ~mcnk73lJ~f1VKWpGOGuiURkiFSmVMkJ893WrY3t7oovH~y95ZvYboXtVqf4DxrHn6rZcunu93wBXv32mMK0EI4H8qxCMD28hlqjhVDwvt1s7SeOAbbMGzcIE4k6dnn-zcvLOSFNX4bkTVhsN~rmEdw~vshK7F3O7gY7C3ovl4hL67u7Muc1zfbovmx8R33Bo47NHsbSPYmLIMos0TxpxeJaw4INVHw__",

    link: "/blog/new-year-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/442a/c826/9edc45cc113af20d98b915107533ec06?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpBYD-fd~P~g-YcXC6wm-bf7ZdfVVKsGujO5KjK6l94075BgaHGWxCrJwBl209nO3vF0o7d-VM2kURhdolKL70mUu9XzrowXEt7dJ9GeJnnN35BubdnnmcQ~mcnk73lJ~f1VKWpGOGuiURkiFSmVMkJ893WrY3t7oovH~y95ZvYboXtVqf4DxrHn6rZcunu93wBXv32mMK0EI4H8qxCMD28hlqjhVDwvt1s7SeOAbbMGzcIE4k6dnn-zcvLOSFNX4bkTVhsN~rmEdw~vshK7F3O7gY7C3ovl4hL67u7Muc1zfbovmx8R33Bo47NHsbSPYmLIMos0TxpxeJaw4INVHw__",
    link: "/blog/marketing-trends",
  },
];

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMore = (link: string) => {
    navigate(link);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/fallback-banner.jpg";
  };

  const splideOptions: Options = {
    type: "loop",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
    perPage: 1,
    height: "100vh",
    rewind: true,
  };

  return (
    <div className="mb-16">
      {/* <SeconderNavbar /> */}
      <div className="w-full h-screen ">
        <Splide options={splideOptions}>
          {bannerData.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt="banner"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 p-4 md:p-10 lg:p-14 bg-black bg-opacity-70  w-10/12 mx-auto h-[70vh] top-1/2 transform -translate-y-1/2 rounded-md">
                  <h2
                    className="text-white text-lg lg:text-[3rem] lg:mb-[2.5rem] mb-[1.5rem] md:mb-[1.5rem] italic 
                  leading-[1.7rem] md:leading-[3rem] lg:leading-[3.6875rem] "
                  >
                    Turn Your
                    <span className="font-extrabold"> Post-Holiday </span>
                    Leftovers into
                    <br />
                    Profits: Smart Strategies for Clearing
                    <br /> Stock
                  </h2>
                  <button
                    onClick={() => handleReadMore(slide.link)}
                    className=" border border-white text-white font-medium py-2  px-10 rounded transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Banner;
