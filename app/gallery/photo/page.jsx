import "./photo.css"
import Photoproduct from "../photo/Photoproduct/photoproduct.jsx";
export default function Page() {
  return (
    <div className=" ">
      <section className="photo-section">
        <div className="photo-content">
            <div className="photo-cont ">
          <h1 className="photo-title">Photo Gallery</h1>
           <p className="photo-para">
            <span className="top-line">
              Explore our visual journey through product photography, 
            </span>
            <span className="bottom-line">
              videography, farming practices, and production processes.
            </span>
          </p>
            </div>
          <div className="photo-buttom  ">
            <button className="photo-product">View Products</button>
            <button className="photo-learn">Learn More</button>
          </div>
        </div>
      </section >
      <section >
        <Photoproduct/>
      </section>
    </div>
  );
}
