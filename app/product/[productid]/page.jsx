import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
// import { getProducts } from "../data";
export default async function Page({ params }) {
  const { productid } = await params;
  // fetch product details
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productid}`,
    { cache: "no-store" }
  );
  const product = await res.json();
  // fro similar products
  const similarProduct = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?category=${product.category}&_limit=4`
  );
const allSimilar = await similarProduct.json();

const similarProducts = allSimilar
  .filter((item) => String(item.id) !== String(product.id))
  .filter((term)=> term.category === product.category);

  return (
    <div className="min-h-screen bg-black">
      <section className="max-w-[1600px] mx-auto px-6 py-10">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 text-[#EAB308] hover:text-[#F59E0B] mb-8 font-semibold"
        >
          <IoMdArrowBack size={20} />
          Back To Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            <div className="bg-white rounded-2xl  shadow-2xl mb-6 flex items-center justify-center">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-full object-cover  rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden border-2 aspect-square border-[#EAB308] shadow-lg transition-all duration-300">
                <img
                  src={product.images}
                  alt={product.name}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#AF5600] mb-4 ">
                {product.name}
              </h1>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#C28957]">
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Link
                href={"/contact"}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#EAB308] text-[#EAB308] rounded-lg hover:bg-[#EAB308] hover:text-black transition-all duration-300 font-medium text-lg group"
              >
                <span className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <FiMessageCircle />
                </span>
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-[#EAB308]">
                Similar Products
              </h2>
              <div className="w-8 h-8 bg-[#EAB308] rounded-full flex items-center justify-center">
                <FiExternalLink className="w-4 h-4 text-black" size={24} />
              </div>
            </div>
            <Link
              href={`/product?category=${product.category}`}
              className="text-[#D2863C] hover:text-[#EAB308] transition-colors font-medium flex justify-center items-center gap-2"
            >
              View All{" "}
              <span>
                <HiArrowLongRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden  border border-transparent hover:border-[#EAB308]/40 shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_rgba(234,179,8,0.15)] transition-all duration-400 ease-out w-full max-w-sm h-96 cursor-pointer flex flex-col mx-auto"> */}
          {/* <div className="h-2/3 bg-[#111] flex items-center justify-center overflow-hidden">
            <img src={product.images} alt={product.name} className=" w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "/>            
            </div>
            <div className="p-4 text-center h-1/3 flex flex-col justify-center">
            <h3 className=" text-[#EAB308] text-lg font-bold font-['Poppins'] mb-1 leading-tight transition-colors duration-300 group-hover:text-[#FACC15] line-clamp-1 ">{getProducts(product.category) }
            </h3>
              <p className=" text-[#D2863C]  font-medium font-['Poppins'] text-sm line-clamp-2  ">{product.description}</p>
            </div> */}

          {similarProducts.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-transparent hover:border-[#EAB308]/40 shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_rgba(234,179,8,0.15)] transition-all duration-400 ease-out w-full max-w-sm h-96 cursor-pointer flex flex-col mx-auto"
            >
              <div className="h-2/3 bg-[#111] flex items-center justify-center overflow-hidden">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

              <div className="p-4 text-center h-1/3 flex flex-col justify-center">
                <h3 className="text-[#EAB308] text-lg font-bold mb-1 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[#D2863C] font-medium text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
