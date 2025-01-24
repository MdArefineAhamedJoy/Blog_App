interface TTrandingProps {
  data: {
    image: string;
    title: string;
    description: string;
    link: string;
  }
}

const TrandingCard = ({ data }: TTrandingProps) => {
    return (
        <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
      <div className="h-[280px]">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="Premium Customers with High-End Liquor Pricing"
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold leading-tight mb-4">
          {data.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {data.description}
        </p>
        <a
          className="text-blue-600 font-semibold hover:underline"
          href={data.link}
        >
          See All
        </a>
      </div>
    </div>
    );
};

export default TrandingCard;