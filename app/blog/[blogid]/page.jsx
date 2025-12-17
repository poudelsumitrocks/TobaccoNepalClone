
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import "./blogid.css";

export default async function page({ params }) {
  const { blogid } = await params;

  return (
    <div className="blogid-main">
      <section className="blogid-container">
        <div
          className="blogid-bg"
          style={{ backgroundImage: "url('/bolgimg/leaf.png')" }}
        ></div>

        <div className="blog-overlay"></div>

        <div className="blogid-back">
          <Link href="/blog" className="blogid-text">
            <IoMdArrowBack />
            <span> Back To Blog </span>
          </Link>
        </div>

        <div className="blogid-header">
          <p className="blogid-title">
            Uchha Himal’s Unwavering Commitment to Quality – A Legacy of Trust
            and Craftsmanship
          </p>

          <div className="blogid-author">
            <span>Admin</span>
          </div>

          <div className="blogid-content">
            <div className="blogid-authorinfo">
              <IoPerson />
              <span> Admin </span>
            </div>

            <div className="blogid-heading">
              <h1>Sustainable Methods</h1>
            </div>

            <div className="blogid-date">
              <h3>October 17, 2025</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="spacing">
          <div className="flex-col-gap">
            <h1 className="heading">Main Content</h1>

            <div className="space-y-6 paragraphs">
              <div className="paragraph1">
                <h1 className="para-heading">
                  Uchha Himal’s Unwavering Commitment to Quality – A Legacy of
                  Trust and Craftsmanship
                </h1>

                <p className="para-para">
                  In the world of tobacco manufacturing, quality isn’t just a
                  standard — it’s a legacy. At{" "}
                  <strong className="font-bold text-white">
                    Uchha Himal Product Pvt. Ltd.
                  </strong>
                  , we have built our reputation on a foundation of{" "}
                  <strong className="font-bold text-white">
                    consistency, craftsmanship, and care
                  </strong>
                  . From sourcing the finest tobacco leaves in Nepal to
                  maintaining strict export-grade manufacturing practices, our
                  commitment to excellence defines everything we do.
                </p>
                <div className="blog-line"></div>
              </div>

              <div className="paragraph">
                <h2 className="para-heading">
                  The Journey of Quality Begins with Selection
                </h2>

                <p className="para-para">
                  Every great product starts with great ingredients. Our process
                  begins at the source — with handpicked tobacco leaves
                  carefully selected for their aroma, texture, and strength.
                  This attention to raw material ensures that only the purest,
                  most robust tobacco finds its way into{" "}
                  <strong className="font-bold text-white">
                    Uchha Himal’s Gutkha, Surti, Khaini, and Pan Masala
                  </strong>{" "}
                  products.
                </p>
                <div className="blog-line"></div>
              </div>

              <div className="paragraph">
                <h2 className="para-heading">
                  Precision and Purity in Production
                </h2>

                <p className="para-para">
                  At our{" "}
                  <strong className="font-bold text-white">
                    Sunsari-based production facility
                  </strong>
                  , we blend traditional craftsmanship with modern manufacturing
                  technology. Our quality assurance team monitors every stage of
                  production — from curing and blending to packaging and storage
                  — guaranteeing that each product adheres to both{" "}
                  <strong className="font-bold text-white">
                    Nepalese and international quality standards.
                  </strong>
                </p>

                <div className="para-para blog-span">
                  Our facilities operate with{" "}
                  <strong className="font-bold text-white">
                    state-of-the-art filtration systems, hygienic processing
                    units, and automated packing lines
                  </strong>
                  , ensuring freshness and consistency in every pouch that
                  leaves our factory.
                </div>

                <div className="blog-line"></div>
              </div>

              <div className="paragraph">
                <h2 className="para-heading">Export-Ready Standards</h2>

                <p className="para-para">
                  As a leading{" "}
                  <strong className="font-bold text-white">
                    tobacco exporter from Nepal
                  </strong>
                  , Uchha Himal ensures that every batch meets the regulatory
                  requirements of destination countries.
                </p>

                <div className="para-para blog-span">
                  We customize packaging, labeling, and health warnings based on{" "}
                  <strong className="font-bold text-white">
                    regional compliance
                  </strong>
                  , helping importers confidently distribute products that align
                  with local laws and expectations.
                </div>

                <div className="blog-line"></div>
              </div>

              <div className="paragraph">
                <h2 className="para-heading">A Culture of Responsibility</h2>

                <p className="para-para">
                  We understand that quality goes beyond the product — it
                  extends to how we operate. <br />
                  Uchha Himal promotes{" "}
                  <strong className="font-bold text-white">
                    responsible manufacturing, ethical sourcing, and safe
                    workplace practices
                  </strong>
                  . Our teams undergo continuous training to uphold hygiene,
                  safety, and environmental responsibility in every step of
                  production.
                </p>

                <div className="blog-line"></div>
              </div>

              <div className="paragraph">
                <h2 className="para-heading">The Promise of Uchha Himal</h2>

                <p className="para-para">
                  For us, quality isn’t a checkbox — it’s a promise. Whether
                  you’re an international distributor or a long-standing trade
                  partner, Uchha Himal stands for{" "}
                  <strong className="font-bold text-white">
                    reliability, excellence, and long-term trust.
                  </strong>
                  <br />
                  Every product we make reflects our deep respect for
                  craftsmanship and our ongoing pursuit of perfection.
                </p>

                <div className="para-para blog-span">
                  <strong className="font-bold text-white">
                    Uchha Himal Product Pvt. Ltd. — where tradition meets
                    innovation, and quality defines identity.
                  </strong>
                </div>
              </div>
            </div>
            <div className="blog-gallery">
              <h3 className="bloggallery-title">Blog Gallery</h3>
          
              <div className="blog-images">
                <div className="blog-card">
                <img
                  src="/bolgimg/blogidimg1.png"
                  alt="ganja"
                 
                  className="images"
                />
                </div>
                <div className="blog-card">
                <img
                  src="/bolgimg/blogidimg2.png"
                  alt="ciggrates"
                 
                  className="images"
                />
                </div>
                <div className="blog-card">
                <img
                  src="/bolgimg/blogidimg3.png"
                  alt="Weed"
                 
                  className="images"
                />
                </div>
                <div className="blog-card">
                <img
                  src="/bolgimg/leaf.png"
                  alt="Leaf"
                 
                  className="images"
                />
                </div>
                <div className="blog-card">
                <img
                  src="/bolgimg/leaf.png"
                  alt="Leaf"
                  
                  className="images"
                />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
