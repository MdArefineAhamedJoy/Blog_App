import Card from "../trandingNews/Card";

const LatestNews = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Left Side: 3 Cards */}
        <section className="col-span-3">
          <h1 className="text-2xl font-bold mb-4">The Latest</h1>
          <div className="grid grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        {/* Right Side: 1 Card */}
        <section className="col-span-1">
          <h1 className="text-2xl font-bold mb-4">The Latest</h1>
          <Card />
          <Card />
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
