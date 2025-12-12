
// export default function Page() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <section className="relative mx-auto h-[500px] w-full bg-stone-950 shadow-md overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center filter blur-md"
//           style={{ backgroundImage: "url('/backgroundimg.jpg')" }}
//         ></div>

//         {/* Content on top of the image */}
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <h1 className="text-4xl font-bold">Hello World</h1>
//         </div>
//       </section>
//     </div>
//   );
// }

import "./herosection.css"
export default function Page() {
  return (
    <div className=" page-container">
      <section className="hero-section">
        {/* Background Image */}
        <div
          className="hero-background"
          style={{ backgroundImage: "url('/backgroundimg.jpg')" }}
        >
        </div>
           <div className="hero-overlay"></div>
        <div className="hero-content">
            <div className="hero-cont mb-4rem">
          <h1 className="hero-title">Premium Tobacco</h1>
          <p className="hero-para">Experience the finest quality tobacco products . Our traditional methods and sustainable practices ensure exceptional quality in every product.</p>
            </div>
          <div className="hero-buttom  w-96 ">
            <button className="hero-product">View Products</button>
            <button className="hero-learn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
