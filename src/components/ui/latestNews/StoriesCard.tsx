interface TTrandingProps {
  data: {
    id: string;
    image: string;
    title: string;
    description: string;
    link: string;
  };
}
const StoriesCard = ({ data }: TTrandingProps) => {
  return (
    <div className="mb-10">
      <div className=" h-[280px]">
        <img className="w-full h-full " src={data?.image} alt="" />
      </div>
      <div className=" pb-6">
        <h2 className="py-4 text-[22px] leading-[26.82px]">
          How to Attract Premium Customers with High-End Liquor Pricing
        </h2>
      </div>
    </div>
  );
};

export default StoriesCard;
