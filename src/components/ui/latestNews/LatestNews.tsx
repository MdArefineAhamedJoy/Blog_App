import NewsCard from "./NewsCard";
import StoriesCard from "./StoriesCard";

const storeData = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/f524/185e/e8abe20ccaae6911efcc037d71891e5c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcVY04e8~0AvuuYeAN1qQmfvnb17CyMyGOL8nbPD4JtWE85vFmzmYwhrJG7RIWgF3H50c8PjdauXto~jDN~0IHMwFleDzcFaOgxsOvlaEoF~wJR1Fk3K~AwX5q63XnFieeBtmm0CnnM8LiaXf77mJo5GyIbVOLDF6JPqG-cy0d~aH6FZtCr8cVYrYgNQWwZjMJf8-VGP5mixjAfGQWwxwpH5Ot0Fl2d0YYdeNL0U7AsklPyuyf~bLssYaKhkvTch1q50n5N51yTHb0OgqKFmZfrOZYG0sPaflEExv40RPR7ZTajkImNjSR-qbMpv5ib-fSbppSblC0PwYPeADXF8sw__",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/post-holiday-strategies",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/7f8c/01f0/8fd4af505dc60a2c745b3f0d358b4aef?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pb3rJiwwt9CuJQbrrdV9glydYnrr2VpdCo-HaxKdxdn-kmoTnS4CoyrRxVP9o7vzdRFejlsznwqVF2Gl~4rDtooXsXcu5y4~bW8jI3HXVU-C7ZBxI-~aAKjte5VDu3KEmfcPDzBSb8oxr3yR~Dj4NT9thFTBtVBt3UST-mRt8pu8yru4VJOZaPr8L0kQxtUxaZKndS35zyDXH1D4JSZAE2cEQe4NHfag0wQMjioeV6LywKi2VJXS5berVC0lE1BGgx0iIQBOARFTmoalVc2WLBhua1~fYTeCXRa4Zoiif7I-Lh1c2mdq9yDniyztSTyQu3A3fGsQn85mWqYhdUPC~g__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/new-year-strategies",
  },
];
const LatestNews = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-6">
        <section className="col-span-3">
          <h1 className="text-2xl font-bold mb-4">The Latest</h1>
          <div className="grid grid-cols-3">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </section>
        <section className="col-span-1">
          <h1 className="text-2xl font-bold mb-4">The Latest</h1>
          {storeData.map((data) => (
            <StoriesCard key={data.id} data={data} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
