import Card from "./Card";
import TrendingBanner from "./TrendingBanner";
import TrendingCard from "./TrendingCard";

const trendingContainer = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8a05/86cc/fd0171327ed95a4546d0270d8107689b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nK44P7XWBqaF-RgwsdLQuFrkOy7HbPqeOAA5YUkBd5~noR5nZpXkJqw5qKLgiVAfrx64N8~4UzQAbNoCxFo6B~eFZXox9RpwpZjdaN3tbpjiOpS5UXhS21XJBCGlBo6at3ypzFdlQRIQVhSbJ51nfzWawBzT22YnQRVLyyynjjYsEsjtr7BtbHx8~5NJGkd14Pa90yZEt2bEkmnbWwbM8BxIzMcc-XpNoOQOkiFIN0nTRbQqWafbYOd1ZOBRcA605BjnwqChj9opPd6kDJkkwFSm6Wxd2NLuTJCy6khCukLH3-SbiLvYPF5hx~PtDIRxT0bDy7amP-dwDO0kgLpHiQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/post-holiday-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/e2e0/9e6d/ba671740a5b9fcff9a12c123605756b5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFceG4QUbgm9MEMf2xaqPjfQlWx8lt0vjsX8blTOL508g3OtOQVIkq-of~ydTHMF5K4-X9-ccrK3rxj-9CzbsYMm6Gcy5qh510jHH1mhzSY2zwD9kfO6GD3EvTfyOOmeeizjnbc0c0pUTzkxjW0oWJKMRU1nwxfAQ~76NZpwYGyDxDvSGWhIEsxZjwv-IepEkjZl0ug8acQSIZBlsjzsJvB2LztCClPExf3yA-W9gdjpT4hvynOJgo-LYJzx32cjZ6xyW-RkkuPgweupskZ26qXklWmRaZwsyqXVMK0AgOHjQavOBi19FjQg6FDVkVIkl00ajMPyKNRhL2DkcnnNqQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/new-year-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1456/bbbc/73fd4ae033881ed43b2bf95bd0b51829?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMEPNrq8B3rNlmmNNCR4rrtG4DhpSF8vTV96Sg3eROyJEKlQAlYgu4YGj~lwrOsyYBvLO1PZZwwor~Dfoy-1~FigiyhlLd3UrKdvZLboIxk9OSmNDVBpe45PmnN6OFy3QeWKmGG5qmIO8fNyThHcp2nW7rQGsJ3B88d0~Tv4J0Jpkjrb1QL-QxgmHS4IpYxfBqJVMAfEhk214uu-bB~3nIN3NkSy~3CKinP9cOrxrd4T-qt4sIEGGoL~tsYXS5ITRJsE1Fv1co4ZqyGXch1C7cpW319sTUK5pxYTKoggREVhuxDm5gT-OY9FY5V9~9ibnkj9u0LinukSdMAvWioZjA__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/27a9/676a/d08d7d1f1a0782acd2023aaf16f9a028?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HxF9cWK8HpgsjqUtptI-aQekj2-nOvI9F2YqI~PESWkUFgO3HtM5h1U~anm8loq8Wj~ug-DvPFG78BkpebtoP1Tbcls1Tf5ZMe7nbWZJ05O1YldX0u-4YMlCjPBpOtYhasnDPBFerxKA7Hcj9aha~BzIepfTD-5rt55JAD9WzfFxzKleUV3yHE36oe-i4yhQI4RoMnn0cD571~TPVEed7UbFVYoWU8nE3VZXS3qk2lmN-39eAXiaHxIcSw09hFEcovAEtKY8y7ZFeh5K8vL3eS7ArP5QgRUoLj95Nl2TPV2FgBl~aLdx4sS~YymHiRb7aF4v~1XmlDjd-Re7C4sqVw__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8241/076b/97090bbdecf22b912e83d2d0195ab627?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTYgX~5zPkiVG6Kk1~ci3HRvftxPCQkhAq8E0Rgv~-xF5AvNuhfuIKhMe-fEYhvh-vz6HU26nSUZEpouQ96KM4TX3kMMGaTP0P3rZvJK5a95w6NlFPjCzx3o6TpKNoNHuxfh6zZUTixBPN7OXUpc5z7D4mFxcWMKabA27G-mqBc8u-23o46kzxu2nygvtgCKoY7MdRRBAP3dXQADM7wX9-47cV1JkB7vlJEk9huXJ7pKBs4qorsLAxWPqZooFTC2WCA-xOe4lbhKrzEougE907GzOAckvF0LDdV1mnxZJFYQ-iIaIMvTfY~r0FHfjDiBwzOZEviJGKZ~Q94feCF1TA__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ce4c/50f9/7a33a0ff1d112d1e7271ec92431c8532?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D78vt0YY4pT0VBCi8ghKUMiAmc0OcO~e6lJjj6YQiugVlPr5vQlWBEPHqD6ctXxr3SMmusmkkhPSHK~H7ketonkVaTNwEfagV3NEfGaeIzVZYHnTc6fA7PbFFPvf7z9VZ5pJztV-YwkQqh-tChKc~2tk59M-U9qRwWyr9vyZlqU0o-TTYCzq8r9IyU0gVPHqHi399sJBlRXTGJY0n2Q6ksZe1zFugul11o0NmoyZxHNaHLKsblE-KALnPlzrY3NvKPO8JsX9Tvig1KiZbiuyrOPJ7oT9mvjLDgxJ9R-kOaabMUj14iw7d1jtxXdyJpWDkHeRkMcZllyhCpGau9GcEg__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
];
const cardData = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/140b/1023/e17c613e931ad7c34d6ff61388a4065d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkNuTIlmMsasZEOajGbsQkMsay5yc3cagoeaqFkR12CCeLS8WIGBL3mmt~NkKzMfqnkOO1qbaseFKbseTcSiTLXZhh1tg8xU9wi~Rhje5DQWsVLkGWL4TjAHQl3Dq4JIDNz~5TkJ-0vEbcEXov7ZWDfr9IVhG9p4C76QGtjspB9~8C~kVGB~2PIDdeB2qb5hqY-BbT2mR~YS-UycHtn2Uxbd2Byjp-dUVc1E2Jbsluonh~Y67NFVdbC7EAh7FZEWLE5L8rP~tTj-~6Bx1~YB4Wk~IdOJ3Kf-itvgZjFpGkuqMrz2UsRHMXlzeUH7MWNdGJv6JkjTjpcenpICQjkS7A__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/post-holiday-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/c35c/0b7b/005ad69ea255bc332865479ae92d0b2f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jF23lY7RnJS0PoyqrVa6rMdaw9KOftWMY~it7Ww~KKFMd6aTPeF6kzS073h3iTv62xIuFTFkWOqK2f0qEGOowOhpzxdNRgLdCaBNk4dX~FpRV-9iBkpK3j7tkNQKMOyfhRVdgWkDeIJ4MU2khCwqSgCEv3uyYKYo41GMzMq6JQVRpPUFNMXetalOuDit~ICswbYPi0-GFQcplu-4IQv6otP7~ustsP4a7TAjjduLv-Ig20aJcpnXXn3EnvI4LUl2KYQ5PDgMFUM1d-~jlGYZP8eij-6T-yQpgt3PKS9g1t~~UvUlral1fF8-eWmubYiMldN1QyDzAUUt6LZ7lUlJHA__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/new-year-strategies",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/c6e9/95b8/8660d5e6f184e2a86f043612a3221f47?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAcxux0nFRVyVb-oDKKJYJsZB2lE~mp6U-Emq63ZE-x7EywXB6QEcVyF~lr5L0DH7yh65U~xYgSTTOqJHyXcGmup-xe8jSbee4y1JIpQUu8bg2lCq9pI6ddJyBq26bx3J9qSBM0HUSAtNstnJ-h3RRJx0RHp7pd88cr83Nek29MZr11KB1qlic5WIfp-bRPA3pbJrDZYk2lQoXvHey~yaPXQJW2hXRTQ-nNH5tH05gnfWW05aZL2TT~HhYtuNuVJat6Dpl7B3Ht6ginB-R7p-sUFiw~qdZWKQjmL6HouuNByvgAwLsCpOeag4a7mLUn4xipN32mUWajKzrsJKRqrmQ__",
    title: "How to Attract Premium Customers with High-End Liquor Pricing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    link: "/blog/marketing-trends",
  },
];

const TrendingContainer = () => {
  return (
    <div>
      <TrendingBanner />
      <section className="grid grid-cols-3 gap-5 mb-16">
        {cardData.map((data) => (
          <Card data={data} />
        ))}
      </section>
      <section className="grid grid-cols-2 gap-5 mb-16">
        {trendingContainer.map((data, index) => (
          <TrendingCard key={index++} data={data} />
        ))}
      </section>
    </div>
  );
};

export default TrendingContainer;
