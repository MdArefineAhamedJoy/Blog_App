import { TCardProps } from "@/types/card.type";

const NewsCard = ({
  data,
  isLastInRow,
}: {
  data: TCardProps;
  isLastInRow: boolean;
}) => {
  return (
    <div className={`${isLastInRow ? "" : "lg:border-r lg:border-gray-500"}`
}>
      <div className="h-[240px] pb-6 border-b border-gray-500">
        <img
          className="w-full h-full rounded px-6"
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="px-6 pb-6">
        <h2 className="py-4 text-[22px] leading-[26.82px]">{data.title}</h2>
        <p className="pb-4">{data.description}</p>
        <a className="text-[15px] leading-[18.29px] font-bold" href="8">
          See All
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
