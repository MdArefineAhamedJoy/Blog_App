const NewsCard = () => {
  return (
    <div className="border border-red-500">
      <div className=" height-[280px] pb-6 border-b border-red-400 ">
        <img
          className="w-full h-full rounded px-6"
          src="https://s3-alpha-sig.figma.com/img/c6e9/95b8/8660d5e6f184e2a86f043612a3221f47?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAcxux0nFRVyVb-oDKKJYJsZB2lE~mp6U-Emq63ZE-x7EywXB6QEcVyF~lr5L0DH7yh65U~xYgSTTOqJHyXcGmup-xe8jSbee4y1JIpQUu8bg2lCq9pI6ddJyBq26bx3J9qSBM0HUSAtNstnJ-h3RRJx0RHp7pd88cr83Nek29MZr11KB1qlic5WIfp-bRPA3pbJrDZYk2lQoXvHey~yaPXQJW2hXRTQ-nNH5tH05gnfWW05aZL2TT~HhYtuNuVJat6Dpl7B3Ht6ginB-R7p-sUFiw~qdZWKQjmL6HouuNByvgAwLsCpOeag4a7mLUn4xipN32mUWajKzrsJKRqrmQ__"
          alt=""
        />
      </div>
      <div className="px-6 pb-6">
        <h2 className="py-4 text-[22px] leading-[26.82px]">
          How to Attract Premium Customers with High-End Liquor Pricing
        </h2>
        <p className="pb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <a className="text-[15px] leading-[18.29px] font-bold" href="8">
          See All
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
