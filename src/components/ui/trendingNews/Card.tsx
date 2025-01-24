import { TCardProps } from "@/types/card.type";


const Card = ({ data }: {data : TCardProps}) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="h-[280px]">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="Premium Liquor"
        />
      </div>
      <div className="p-6 bg-white">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {data.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{data.description}</p>
        <a className="text-sm font-bold text-blue-500 hover:underline" href="#">
          See All
        </a>
      </div>
    </div>
  );
};

export default Card;
