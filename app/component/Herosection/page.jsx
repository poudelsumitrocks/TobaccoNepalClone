

import Link from "next/link";
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
          <h1 className="hero-title">
            <span className="hero-span1">Premium</span> <span className="hero-span2">Tobacco</span></h1>
          <p className="hero-para">Experience the finest quality tobacco products . Our traditional methods and sustainable practices ensure exceptional quality in every product.</p>
            </div>
          <div className="hero-buttom    ">
            <Link href={"/product"} className="hero-product">View Products</Link>
            <button className="hero-learn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
