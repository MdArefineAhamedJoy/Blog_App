const Subscription = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto grid md:grid-cols-2 gap-8  px-4 py-16 max-w-6xl">
        <section className="w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/07db/d9bc/e393afd1ba7cc55d6bf07751fa88b430?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5OPr68kq2VvZAkHh9e-GBhHzjsliP1ojxZ6CJkoLNIjohVHO1Db60PIC7CqDkRLfcqEidqR3CeNH3pIQl952t9uTIygRPgeiDc~04FuUF6CF2oZrXeHLU19OnztxFDxCiDPGbcYKLPWiHqOsVs2VEW7A0ZqM1OOrrPM7YbPIN9xXHWYYGmqGSfz77iYDyoebeZcC8b6hLigbcUTjTd5rJU41jJtDgZ74EmX3xgBd8wyu3nos3-tFb1OhWvxjV1FkSJy81xafkv7VcOe8nvnxZfZlhmx4EwnWwPLP-ngECNzoerKEwGbpxnbKRcLKCNLJrCoaX88rcBWT-tcQqiFjg__"
            alt="Newsletter preview"
            className="w-full h-[550px] rounded-lg shadow-lg"
          />
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mb-6">Get The Free Newsletter</h1>
            <p className="text-gray-300 text-lg">
              Subscribe to Barrel & Business for news, trends & analysis
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full my-4 px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-white text-white placeholder:text-gray-400"
            />

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <label className="flex space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-[21px] leading-[32px]">
                    Software QA
                  </span>
                </label>
                <label className="flex  space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-[21px] leading-[32px]">
                    Mobile App Testing
                  </span>
                </label>
                <label className="flex  space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-[21px] leading-[32px]">
                    Automated Testing
                  </span>
                </label>
                <label className="flex  space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-[21px] leading-[32px]">
                    Web Testing
                  </span>
                </label>
              </div>

              <label className="flex  space-x-3">
                <input
                  type="checkbox"
                  name="subscription_type"
                  className="w-9 h-9  border-gray-600 rounded text-white focus:ring-white"
                />
                <span className="text-gray-300 ml-2 font-light text-[21px] leading-[32px]">
                  By signing up to receive our newsletter, you agree to our
                  Terms of Use and Privacy Policy. You can unsubscribe at any
                  time.
                </span>
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className=" px-10 border border-white font-semibold py-2  rounded hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Subscription;
