
const Home = () => {
  return (
    <>
      <section
        className="hero min-h-[30rem]"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661900503280-36c1b4be3a66?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="pb-5 text-5xl font-bold">eAgroCom</h1>
            <p className="pb-5">A Bridge between Farmers and Consumers</p>
            <a href="#about-us" className="btn btn-sm bg-inherit border-inherit text-white">Stay with US</a>
          </div>
        </div>
      </section>

      <section id="about-us" className="px-8 bg-green-800 text-white">
        <h1 className="py-4 text-5xl text-center underline font-bold">About Us</h1>

        <div>
          <p className="text-2xl font-bold">
            Revolutionizing Agriculture, One Farm at a Time-
          </p>
          <p className="pl-6 text-lg">
            Welcome to{" "}
            <a className="font-bold" href="">
              eAgroCom
            </a>
            , your one-stop solution for smart agriculture. We are dedicated to
            empowering farmers and connecting them with consumers to build a
            sustainable and efficient food system.
          </p>
        </div>

        <div className="pt-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold">For Farmers:</h3>
            <ul className="list-disc pl-10 text-md">
              <li>Real-time Weather Updates</li>
              <li>AI-Powered Crop Recommendations</li>
              <li>Online Marketplace</li>
              <li>Sell Your Produce</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold">For Consumers:</h3>
            <ul className="list-disc pl-10 text-md">
              <li>Fresh, Local Produce</li>
              <li>Convenient Online Shopping</li>
              <li>Transparent Supply Chain</li>
              <li>Support Local Farmers</li>
            </ul>
          </div>
        </div>

        <div className="py-8">
          <h3 className="text-2xl font-bold">Our Mission:</h3>
          <p className="pl-6 text-lg">
            To empower farmers with the tools and knowledge they need to thrive,
            and to provide consumers with access to healthy, sustainable food.
          </p>

          <h3 className="pt-4 text-2xl font-bold">Our Vision:</h3>
          <p className="pl-6 text-lg">
            A future where agriculture is efficient, sustainable, and profitable
            for all.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
