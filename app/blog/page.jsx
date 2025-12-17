import "./blog.css";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
export default function page() {
  return (
    <div className="blog-container">
      <section className="blog-section">
        <div className="blog-main">
          <h1 className="blog-header">Blog</h1>
          <p className="bolg-para">
            <span className="top-line">
              Experience the journey from farm to finished product through
            </span>
            <span className="bottom-line">
              captivating visuals of our photography, practices, and production.
            </span>
          </p>
        </div>
      </section>
      <section className="blog-featured">
        <div className="blog-headerproduct">
          <h1 className="product-header1">Featured Articles</h1>
        </div>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image">
              <img src="./bolgimg/leaf.png" alt="blog" />
            </div>

            <div className="blog-content">
              <div className="blog-header1">
                <div className="blog-meta">
                  <div className="author">
                    <div className="author-icon">
                      <IoPerson size={12} />
                    </div>
                    <span>Mr.Shah</span>
                  </div>

                  <h1 className="blog-date">October 17, 2025</h1>
                </div>

                <h3 className="blog-title">
                  Uchha Himal’s Unwavering Commitment to Quality – A Legacy of
                  Trust and Craftsmanship
                </h3>
              </div>

              <div className="blog-footer">
                <h1>Admin</h1>
              </div>

              <div className="blog-button">
                <Link href={`/blog/1`}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
