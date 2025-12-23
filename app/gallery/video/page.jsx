import "./video.css";
export default function page() {
  return (
    <div>
      <section className="video-section">
        <div className="video-content">
          <div className="video-cont ">
            <h1 className="video-title">Video Gallery</h1>
            <p className="video-para">
              Explore our collection of videos showcasing product highlights,
              behind-the-scenes production, and more.
            </p>
          </div>
          <div className="video-buttom  ">
            <button className="video-product">View Products</button>
            <button className="video-learn">Learn More</button>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-black">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 mb-10">
    <div className="relative group overflow-hidden rounded-lg  cursor-pointer border border-gray-800 shadow-[0_2px_20px_rgba(110,110,110,0.5)] transition-all duration-300 ">
  

      <video className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[101%] " controls>
        <source src="/vediogallery/video.mp4" type="video/mp4" />
      </video>
     
      <div className="p-4 bg-gray-900">
        <h1 className="text-lg font-semibold text-orange-400">Tobacco Leaves</h1>
        <p className="text-sm text-gray-300">
          Carefully Cultivated Leaves to later Provide surreal Experience.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}
