// "use client";
// import { useState } from "react";
// import "./product.css";
// import "./style.css";
// import { CiSearch } from "react-icons/ci";
// import { IoFilter } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import useSWR from "swr";
// import { getProducts } from "./data";
// import { useSearchParams, useRouter } from "next/navigation";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Page() {
//   const [dropdown, setDropdown] = useState(false);
//   const [active, setActive] = useState("all");

//   const {
//     data: products,
//     error,
//     isLoading,
//   } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher);

//   const specialIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const categories = ["all", "gutkha", "surti", "jarda", "pan-masala"];
//   const [currentCategory, setCurrentCategory] = useState("all");

//   // ---- Pagination Setup ----
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const page = parseInt(searchParams.get("page")) || 1;
//   const itemsPerPage = 10;

//   const searchquery = searchParams.get("search") || "";

//   const filteredProducts =
//     active === "all"
//       ? products ?? []
//       : (products ?? []).filter((item) => item.category === active);
  

//   const totalProducts = filteredProducts.length;
//   const totalPages = Math.ceil(totalProducts / itemsPerPage);
//   const startIndex = (page - 1) * itemsPerPage;
//   let paginatedProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   // Apply specialIds sorting only on first page of "all" category
//   if (active === "all" && page === 1) {
//     paginatedProducts = paginatedProducts
//       .filter((p) => specialIds.includes(p.id))
//       .sort((a, b) => specialIds.indexOf(a.id) - specialIds.indexOf(b.id));
//   }

//   function dataProduct(path) {
//     return `flex items-center justify-center h-20 w-56 px-2 py-2 rounded-lg text-sm lg:text-lg font-semibold transition-all duration-300 cursor-pointer ${
//       active === path
//         ? "bg-[#FFF7E6] text-[#EAB308] shadow-lg -translate-y-1"
//         : "bg-white text-gray-700 hover:-translate-y-1 hover:shadow-lg hover:bg-[#FFF7E6] hover:text-[#EAB308]"
//     }`;
//   }

//   const showing = paginatedProducts.length;
//   const total = filteredProducts.length;

//   const handleClick = () => {
//   const q = searchParams.get("search");
//     router.push(`/product?search=${q}&page=1`);
//   }


//   return (
//     <div className="product-container max-h-full ">
//       {/* Product Banner */}
//       <section className="product-section">
//         <div
//           className="product-background"
//           style={{
//             backgroundImage: "url('./featureproductimg/ourproduct.png')",
//           }}
//         ></div>
//         <div className="product-overlay"></div>
//         <div className="product-content">
//           <div className="product-details">
//             <h1 className="product-title pulse">Our Premium Products</h1>
//             <div className="product-line"></div>
//             <p className="product-para">
//               Discover our extensive selection of high-quality tobacco products,
//               each expertly crafted with the finest ingredients from Nepal's
//               rich soil.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Search & Filter */}
//       <section className="bg-black max-h-[1800px] pl-6 pr-6  ">
//         <div className="search-container mb-8">
//           <div className="search-box">
//             <CiSearch className="search-icon" />
//             <input type="text" placeholder="Search products..." />
//             <button className="search-btn" onClick={handleClick} >Search</button>
//           </div>

//           <div className="filter-btn">
//             <IoFilter className="filter-icon" size={20} />
//             <div className="learn">
//               <h1
//                 className="learn-header"
//                 onClick={() => setDropdown(!dropdown)}
//               >
//                 Learn
//                 <IoIosArrowDown className="learn-icon" size={16} />
//               </h1>
//               {dropdown && (
//                 <div className="absolute top-full left-[-48] mt-2 w-36 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/30 p-2 z-10 shadow-lg">
//                   <ul className="flex flex-col gap-2">
//                     <li className="px-2 py-2 cursor-pointer bg-[#eab308] rounded-md">
//                       Latest
//                     </li>
//                     <li className="px-4 py-2 cursor-pointer hover:bg-[#eab308] rounded-md">
//                       Oldest
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Showing info */}
//         <div className="text-center mb-8">
//           <h1 className="text-[#D2863C] text-lg font-medium">
//             Showing <span className="text-[#EAB308] font-bold">{showing}</span>{" "}
//             of <span className="text-[#EAB308] font-bold">{total}</span>{" "}
//             products
//           </h1>
//         </div>

//         {/* Category Buttons */}
//         <div className="grid lg:grid-cols-5 md:grid-cols-3 px-2 gap-6 mb-8">
//           {categories.map((item) => (
//             <button
//               key={item}
//               className={dataProduct(item)}
//               onClick={() => {
//                 setActive(item);
//                 router.push("/product?page=1"); // reset to page 1 on category change
//               }}
//             >
//               {getProducts(item)}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-4 mb-10">
//           {paginatedProducts.map((item) => (
//             <div
//               key={item.id}
//               className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out "
//             >
//               <div className="h-2/3 flex items-center rounded-tl-2xl rounded-tr-2xl bg-[#111111] justify-center overflow-hidden">
//                 <img
//                   src={item.images}
//                   alt={item.name}
//                   className="mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//               </div>
//               <div className=" text-center h-1/3 flex flex-col item-center">
//                 <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15] pt-4">
//                   {item.name}
//                 </h1>
//                 <p className=" text-[#D2863C]  line-clamp-2 text-center tracking-wide font-medium text-sm truecate overflow-hidden">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center gap-3 mt-8">
//           <button
//             disabled={page === 1}
//             onClick={() => router.push(`/product?page=${page - 1}`)}
//             className="p-4 rounded-xl bg-gray-800 text-white disabled:opacity-50"
//           >
//             <RiArrowLeftSLine size={30} />
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => router.push(`/product?page=${i + 1}`)}
//               className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg  transition-all duration-300 transform hover:scale-110  ${
//                 page === i + 1
//                   ? "bg-[#EAB308] text-black shadow-lg  shadow-[#EAB308]/50 "
//                   : "bg-[#2D2D2D] text-white"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             disabled={page === totalPages}
//             onClick={() => router.push(`/product?page=${page + 1}`)}
//             className="p-4 rounded-xl bg-gray-800 text-white disabled:opacity-50"
//           >
//             <RiArrowRightSLine size={30} />
//           </button>
//         </div>

//         <div className="bg-blackc mt-20">
//           <pre> </pre>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import "./product.css";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import useSWR from "swr";
import { getProducts } from "./data";
import Link from "next/link";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const [dropdown, setdropdown] = useState();
  const [active, setActive] = useState("all");
 

  const { data: products, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    fetcher
  );

  const specialIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = ["all", "gutkha", "surti", "jarda", "pan-masala"];

  const filteredProducts =
    active === "all"
      ? products ?? []
      : (products ?? []).filter((item) => item.category === active);

  const selectedProducts =
    active === "all"
      ? (filteredProducts || [])
          .filter((p) => specialIds.includes(p.id))
          .sort(
            (a, b) =>
              specialIds.indexOf(a.id) - specialIds.indexOf(b.id)
          )
      : filteredProducts || [];

  function dataProduct(path) {
    return `flex items-center justify-center h-20 w-56 px-2 py-2 rounded-lg text-sm lg:text-lg font-semibold transition-all duration-300 cursor-pointer ${
      active === path
        ? "bg-[#FFF7E6] text-[#EAB308] shadow-lg -translate-y-1"
        : "bg-white text-gray-700 hover:-translate-y-1 hover:shadow-lg hover:bg-[#FFF7E6] hover:text-[#EAB308]"
    }`;
  }
 
  const showing = selectedProducts.length;
  const total = filteredProducts.length;

  return (
    <div className="product-container max-h-full">
      <section className="product-section">
        {/* Background image */}
        <div
          className="product-background"
          style={{
            backgroundImage: "url('./featureproductimg/ourproduct.png')",
          }}
        ></div>
        <div className="product-overlay"></div>

        {/* Main content */}
        <div className="product-content">
          <div className="product-details">
            <h1 className="product-title pulse">Our Premium Products</h1>
            <div className="product-line"></div>
            <p className="product-para">
              Discover our extensive selection of high-quality tobacco
              products, each expertly crafted with the finest ingredients
              from Nepals rich soil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black max-h-[1800px] pl-6 pr-6">
        <div className="search-container mb-8">
          <div className="search-box">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search products..." />
            <div className="search-btn">Search</div>
          </div>

          <div className="filter-btn">
            <IoFilter className="filter-icon" size={20} />
            <div className="learn">
              <h1
                className="learn-header"
                onClick={() => setdropdown(!dropdown)}
              >
                Learn
                {dropdown ? (
                  <IoIosArrowDown className="learn-icon" size={16} />
                ) : (
                  <IoIosArrowDown className="learn-icon" size={16} />
                )}
              </h1>
              {dropdown && (
                <div className="absolute top-full left-[-48] mt-2 w-36 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/30 p-2 z-10 shadow-lg">
                  <ul className="flex flex-col gap-2">
                    <li className="px-2 py-2 cursor-pointer bg-[#eab308] rounded-md">
                      Latest
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-[#eab308] rounded-md">
                      Oldest
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-[#D2863C] text-lg font-medium">
            Showing{" "}
            <span className="text-[#EAB308] font-bold">{showing}</span> of{" "}
            <span className="text-[#EAB308] font-bold">{total}</span> products
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 px-2 gap-6 mb-8">
          {data.map((item) => (
            <button
              key={item}
              className={dataProduct(item)}
              onClick={() => setActive(item)}
            >
              {getProducts(item)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-2 mb-10">
          {selectedProducts.map((item) => (
            <Link
              key={item.id}
             href={`/product/${item.id}`}
              className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out"
            >
              <div className="h-2/3 flex items-center rounded-tl-2xl rounded-tr-2xl bg-[#111111] justify-center overflow-hidden">
                <img
                  src={item.images}
                  alt={item.name}
                  className="mt-2 w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="text-center h-1/3 flex flex-col item-center">
                <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15] pt-4">
                  {item.name}
                </h1>
                <p className="text-[#D2863C] line-clamp-2 text-center tracking-wide font-medium text-sm truecate overflow-hidden">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed">
            <RiArrowLeftSLine size={30} />
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 bg-[#EAB308] text-black shadow-lg shadow-[#EAB308]/50 glow-effect">
            1
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 bg-[#2D2D2D] text-white hover:bg-[#3D3D3D] shadow-md">
            2
          </button>
          <div className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed">
            <RiArrowRightSLine size={30} />
          </div>
        </div>

        <div className="bg-blackc mt-20">
          <pre> </pre>
        </div>
      </section>
    </div>
  );
}
