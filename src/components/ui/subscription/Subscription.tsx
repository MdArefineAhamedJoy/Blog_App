const Subscription = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="h-[450px] md:h-[550px] w-full mx-auto max-w-[575px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/07db/d9bc/e393afd1ba7cc55d6bf07751fa88b430?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5OPr68kq2VvZAkHh9e-GBhHzjsliP1ojxZ6CJkoLNIjohVHO1Db60PIC7CqDkRLfcqEidqR3CeNH3pIQl952t9uTIygRPgeiDc~04FuUF6CF2oZrXeHLU19OnztxFDxCiDPGbcYKLPWiHqOsVs2VEW7A0ZqM1OOrrPM7YbPIN9xXHWYYGmqGSfz77iYDyoebeZcC8b6hLigbcUTjTd5rJU41jJtDgZ74EmX3xgBd8wyu3nos3-tFb1OhWvxjV1FkSJy81xafkv7VcOe8nvnxZfZlhmx4EwnWwPLP-ngECNzoerKEwGbpxnbKRcLKCNLJrCoaX88rcBWT-tcQqiFjg__"
            alt="Newsletter preview"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </section>

        <section className="space-y-8 md:flex md:flex-col md:justify-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get The Free Newsletter
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Subscribe to Barrel & Business for news, trends & analysis
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-white text-white placeholder:text-gray-400"
            />

            <div className="space-y-6">
              <div className="grid  grid-cols-2 gap-4">
                <label className="flex space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-sm md:text-[21px] leading-[32px]">
                    Software QA
                  </span>
                </label>
                <label className="flex space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-sm md:text-[21px] leading-[32px]">
                    Mobile App Testing
                  </span>
                </label>
                <label className="flex space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-sm md:text-[21px] leading-[32px]">
                    Automated Testing
                  </span>
                </label>
                <label className="flex space-x-3">
                  <input
                    type="checkbox"
                    name="subscription_type"
                    className="w-5 h-5 border-gray-600 rounded text-white focus:ring-white"
                  />
                  <span className="text-gray-300 font-light text-sm md:text-[21px] leading-[32px]">
                    Web Testing
                  </span>
                </label>
              </div>

              <label className="flex space-x-3">
                <input
                  type="checkbox"
                  name="terms"
                  className="w-8 h-8 lg:h-10 lg:w-10 border-gray-600 rounded text-white focus:ring-white"
                />
                <span className="text-gray-300 ml-2 font-light text-sm md:text-[21px] leading-[32px]">
                  By signing up to receive our newsletter, you agree to our
                  Terms of Use and Privacy Policy. You can unsubscribe at any
                  time.
                </span>
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
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
