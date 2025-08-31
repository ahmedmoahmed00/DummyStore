function AboutHeroSection() {
  return (
    <div className="py-30  bannerabout">
      <div className="text-center container mx-auto text-black px-1">
        <h1 className="text-5xl font-bold mb-6">About DummyStore</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          We're on a mission to revolutionize online shopping by providing the
          best products, exceptional service, and an unmatched customer
          experience powered by cutting-edge technology.
        </p>
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <p className="bg-white text-lg border-2  border-white py-2 px-6 rounded-md text-pink-600">
            Powered by DummyJSON API
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
