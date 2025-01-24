const TrendingBanner = () => {
  return (
    <div className="mb-16">
      <section className="mb-10">
        <div className="flex items-center  border-gray-300 mb-4">
          <div
            className="bg-black text-white   px-4 py-2 font-bold italic text-sm uppercase"
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
            }}
          >
            The Trending Stories Latest
          </div>
          <div className="relative h-10 flex-grow ml-10 flex items-end">
            <div className="border-t border-black w-full"></div>
          </div>
        </div>
      </section>
      <div className="flex gap-8 mr-11">
        <div>
          <div className="w-[770px] h-[518px]">
            <img
              className=" w-full h-full rounded-md"
              src="https://s3-alpha-sig.figma.com/img/442a/c826/9edc45cc113af20d98b915107533ec06?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpBYD-fd~P~g-YcXC6wm-bf7ZdfVVKsGujO5KjK6l94075BgaHGWxCrJwBl209nO3vF0o7d-VM2kURhdolKL70mUu9XzrowXEt7dJ9GeJnnN35BubdnnmcQ~mcnk73lJ~f1VKWpGOGuiURkiFSmVMkJ893WrY3t7oovH~y95ZvYboXtVqf4DxrHn6rZcunu93wBXv32mMK0EI4H8qxCMD28hlqjhVDwvt1s7SeOAbbMGzcIE4k6dnn-zcvLOSFNX4bkTVhsN~rmEdw~vshK7F3O7gY7C3ovl4hL67u7Muc1zfbovmx8R33Bo47NHsbSPYmLIMos0TxpxeJaw4INVHw__"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="pb-6 font-light italic text-[27px] leading-[47px]">
            Start Here
          </p>
          <h1 className="pb-4 font-extrabold italic text-[31px] leading-[47px] tracking-[0.07em]">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </h1>
          <p className="pb-2 font-semibold text-[19px] leading-[47px] text-black">
            John Leri
          </p>
          <p className="pb-6 font-[275] text-[25px] leading-[47px] tracking-[0.07em]">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <a
            className="font-normal text-[25px] leading-[47px] underline"
            href="8"
          >
            See All
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingBanner;
