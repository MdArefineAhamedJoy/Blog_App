import NewsCard from "./NewsCard";
import StoriesCard from "./StoriesCard";

const storeData = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f524/185e/e8abe20ccaae6911efcc037d71891e5c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcVY04e8~0AvuuYeAN1qQmfvnb17CyMyGOL8nbPD4JtWE85vFmzmYwhrJG7RIWgF3H50c8PjdauXto~jDN~0IHMwFleDzcFaOgxsOvlaEoF~wJR1Fk3K~AwX5q63XnFieeBtmm0CnnM8LiaXf77mJo5GyIbVOLDF6JPqG-cy0d~aH6FZtCr8cVYrYgNQWwZjMJf8-VGP5mixjAfGQWwxwpH5Ot0Fl2d0YYdeNL0U7AsklPyuyf~bLssYaKhkvTch1q50n5N51yTHb0OgqKFmZfrOZYG0sPaflEExv40RPR7ZTajkImNjSR-qbMpv5ib-fSbppSblC0PwYPeADXF8sw__",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/post-holiday-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7f8c/01f0/8fd4af505dc60a2c745b3f0d358b4aef?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pb3rJiwwt9CuJQbrrdV9glydYnrr2VpdCo-HaxKdxdn-kmoTnS4CoyrRxVP9o7vzdRFejlsznwqVF2Gl~4rDtooXsXcu5y4~bW8jI3HXVU-C7ZBxI-~aAKjte5VDu3KEmfcPDzBSb8oxr3yR~Dj4NT9thFTBtVBt3UST-mRt8pu8yru4VJOZaPr8L0kQxtUxaZKndS35zyDXH1D4JSZAE2cEQe4NHfag0wQMjioeV6LywKi2VJXS5berVC0lE1BGgx0iIQBOARFTmoalVc2WLBhua1~fYTeCXRa4Zoiif7I-Lh1c2mdq9yDniyztSTyQu3A3fGsQn85mWqYhdUPC~g__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/new-year-strategies",
  },
];
const latestNewses = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a4c6/c01e/8c2d27121baf738ca48d382161d2090c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ce56A6IBvsiMlwvdr~Sd9obwAVSCo3~KDm8Ypng57iVU6AGzzBg2tAKQjrha2JtLuMV9v~MxJhs2JiUe~wfPTXX7R6TehF8VMMMDlbLWTo-LcC5hGhNkaTPowbl~RqK-dSv0VMQOurSmbn9Jcttd7RKgRAY6K459vu0dcK~ov7RtGUAZSb9lI3Sdhl0~GThfD4RbwbDpvTSN~6yLTZ7jFnx-~DuZqNHjS7E8CBs73aJW3XkjMxI6fpdK1Wa08n9c88Bdq1z0iVt07bFYfCZucK6I5t8WG0NxICp8B2rgwyOmVcr0O5P03AU7uFxBhu--sUSXj2LAw3bm-X4ut11OSg__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/post-holiday-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1b72/b430/359f13970d57316222b05bb951b69830?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGAiPee8grrsOzNRrsp64f9i2H43WJaTEsimgAv9A88YxwUKqT25F9hcsUXFCGIDqM9p2OHdxknWj5e82bKz62VugAwfjmogaqTvJtGOyadlaUicw9h9XWKdzx47cK8dLkoXTWL1YDFW3PLUvxWROm6naDT1~BCD5o6V7Yne7Ah3yoHSz7q6wAhwV-ez2pA7eku6cPG9skiZfhAvwss4AveV9valtI~ZMV0rfc-YD8WvnJtPmeboFtMJRRYJLoCrDcuULTLpUpwzX1C-YDyWJrRLlNY7P9fw1mCLoeU8nhWh0FeOMRXiLw2wMcNuyLIhqtpEQm6KIMrFP9vnUxkqGw__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/new-year-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a74e/ba62/37613ab21a5ddeaf210f0c50f6940770?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVURUzADPB9XOfAQtuDJ0NR59Y-CEosQ~9EBUHsM73YKt4iRQx4M1enFG6a3diSqmdXt7L9HlY818ReJcGYl0KFq383UPxsRkK7bpIRbHnQrYqNc7Ws9j6OWI0Gln6Xngs6CU4tCUW8g7Faq2QUK0G2vW5iJPu-X95UHHAekyPiK8L2FdkFGTx0gOdrPrDrEK6cER70Ta~tOz3HCF7CoSitCZQsV4hNHuQs71o0CDASK3G0EUyYExXEybX1tXsGQoybC7yh0thnQ4b~SpcINztgg1TOdp4qRbmKthndYnyNDsMmHn5NFJEIoOEsl7NBr3Aw682W1kXcGRMP~xFEWFQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f7f8/52ba/70c8fd9adde50c7ed9c90a4bb4dd8b1e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gq4Q9QRaknlq-NoFn2uxUZFe~ckjl-FWU2wANp3mUzy3MhHmJ66rnl7xFJOU8cy5IG1jYgqOMYEt2UNeNtglDZo~hi~gMUozKmp2E-tGD~dR28pIfd25JgP5aoNzaxrbc0eGXMd5CJcM76YvcMNUizKv3Zc5nfKke8lQjTVOXLOyTeOLqmfVE~PCgng2dIL7C3Mrtm0Atxvu3c~A17Z6ddZLWEYrkEfdlsU7R5jnfsJy8~0A6Y99gPiMhPYR0ViVRdA5j~K7blm1Ruv0g9AXjEZLK9VT~nAz92yew~5BWj0q1CNnPU7bxJeiPeUGSdK1bxmJoEKWTFSWNOy2TMeCHg__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a74e/ba62/37613ab21a5ddeaf210f0c50f6940770?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVURUzADPB9XOfAQtuDJ0NR59Y-CEosQ~9EBUHsM73YKt4iRQx4M1enFG6a3diSqmdXt7L9HlY818ReJcGYl0KFq383UPxsRkK7bpIRbHnQrYqNc7Ws9j6OWI0Gln6Xngs6CU4tCUW8g7Faq2QUK0G2vW5iJPu-X95UHHAekyPiK8L2FdkFGTx0gOdrPrDrEK6cER70Ta~tOz3HCF7CoSitCZQsV4hNHuQs71o0CDASK3G0EUyYExXEybX1tXsGQoybC7yh0thnQ4b~SpcINztgg1TOdp4qRbmKthndYnyNDsMmHn5NFJEIoOEsl7NBr3Aw682W1kXcGRMP~xFEWFQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/4cb3/b1e4/0b4f5a858f09677442a248beee45a092?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-SwLgu4wxnyK6Gh3ubktp~6ddmU6SChBfjtQqtO4sZbuF1Rta~XxwoWlLpRYyvb7obVgfqsJ9mooesw1dc36Y~00oh-eoE30EoQhDW-p9pNNOkWlQjNW5e0o5uoWybm0KZr82MaOaluXlRaDjgVtD~Xxxjc6-IE1LQ4r9frpNf5j-WjPHyN6~40obFsyHspBBxIkvGA-0CSuH3G-~8iJHPoNYJvVofp3C9EA9bRW8GlMrUcvhP2xdpKHz5r9cbD97WdCS3VBePdYee0n-I3GjqkXKrHEPZpjVVVQLLswZ0Gg~yEhk0Q5pwoee7NMlXw-oLzOrFx8PtIgty8st9~jQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
];
const LatestNews = () => {
  return (
    <div className="mx-auto p-4 mb-16">
      <div className="grid lg:grid-cols-4 gap-6">
        <section className="col-span-3">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-5">
            {latestNewses.map((data, index) => (
              <NewsCard
                key={index}
                data={data}
                isLastInRow={(index + 1) % 3 === 0}
              />
            ))}
          </div>
        </section>
        <section className="lg:col-span-1  col-span-4">
          <div className="flex mb-3">
            <div className=" font-bold italic text-xl leading-[43.88px]   uppercase">
              The Stories
            </div>
            <div className="relative h-10 flex-grow ml-5 flex items-end">
              <div className="border-t border-black w-full"></div>
            </div>
          </div>
          <div className="md:flex flex-col lg:flex-col gap-6">
            {storeData.map((data, index) => (
              <StoriesCard key={index++} data={data} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
