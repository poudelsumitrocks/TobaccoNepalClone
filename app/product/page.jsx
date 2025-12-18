"use client";

import { useEffect, useState } from "react";
import "./product.css";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import useSWR from "swr";
import { getProducts } from "./data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Popup from "./Popup"
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const [dropdown, setdropdown] = useState(false);
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  // const pageFromUrl=parseInt(searchParams.get("page"))||1
  const itemsPerPage = 10;

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher);

  // const specialIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categories = ["all", "gutkha", "surti", "jarda", "pan-masala"];
  // const [currentCategory, setCurrentCategory] = useState("all");

  const [displayProducts, setDisplayProducts] = useState([]);

  // const filteredProducts =
  //   active === "all"
  //     ? products ?? []
  //     : (products ?? []).filter((item) => item.category === active);

  // const sortedProducts = [...filteredProducts].sort((a, b) => {
  //   const dateA = new Date(a.createdAt).getTime();
  //   const dateB = new Date(b.createdAt).getTime();
  //   return sort === "latest" ? dateB - dateA : dateA - dateB;
  // });
  useEffect(() => {
    if (!products) return;

    const filtered =
      active === "all"
        ? products
        : products.filter((p) => p.category === active);

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sort === "latest" ? dateB - dateA : dateA - dateB;
    });

    setDisplayProducts(sorted);
    setCurrentPage(1);
    router.push("/product?page=1", { scroll: false });
  }, [products, active, sort]);

  // const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  // const indexofLastItem = currentPage * itemsPerPage;
  // const indexofFirstItem = indexofLastItem - itemsPerPage;
  // const currentProducts = sortedProducts.slice(
  //   indexofFirstItem,
  //   indexofLastItem
  // );
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;

  const currentProducts = displayProducts.slice(
    indexofFirstItem,
    indexofLastItem
  );
  const goToPage = (page) => {
    setCurrentPage(page);
    if(active==="all"){
      router.push("/product")
    }else{
      
    }
    router.push(`/product?page=${page}`, { scroll: false });
  };

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [active, sort]);

  // const selectedProducts =
  //   active === "all"
  //     ? (filteredProducts || [])
  //         .filter((p) => specialIds.includes(p.id))
  //         .sort(
  //           (a, b) => {
  //             const dateA = new Date(a.createdAt).getTime();
  //             const dateB = new Date(b.createdAt).getTime();
  //             return sort === "latest" ? dateB - dateA : dateA - dateB;
  //           }
  //           // specialIds.indexOf(a.id) - specialIds.indexOf(b.id)
  //         )
  //     : [...(filteredProducts || [])].sort((a, b) => {
  //         const dateA = new Date(a.createdAt).getTime();
  //         const dateB = new Date(b.createdAt).getTime();
  //         return sort === "latest" ? dateB - dateA : dateA - dateB;
  //       });

  function dataProduct(path) {
    return `flex items-center justify-center h-20 w-56 px-2 py-2 rounded-lg text-sm lg:text-lg font-semibold transition-all duration-300 cursor-pointer ${
      active === path
        ? "bg-[#FFF7E6] text-[#EAB308] shadow-lg -translate-y-1"
        : "bg-white text-gray-700 hover:-translate-y-1 hover:shadow-lg hover:bg-[#FFF7E6] hover:text-[#EAB308]"
    }`;
  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;
  // const showing = selectedProducts.length;
  // const total = filteredProducts.length;

  return (
    <div className="product-container ">
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
              Discover our extensive selection of high-quality tobacco products,
              each expertly crafted with the finest ingredients from Nepals rich
              soil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black max-h-[1900px]  pl-6 pr-6">
        <div className="search-container mb-8">
          <div className="search-box">
            <CiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div
              className="search-btn"
              onClick={() => {
                setCurrentPage(1);
                router.push("/product?page=1", { scroll: false });
              }}
            >
              Search
            </div>
          </div>

          <div className="filter-btn">
            <IoFilter className="filter-icon" size={20} />
            <div className="learn">
              <h1
                className="learn-header"
                onClick={() => setdropdown(!dropdown)}
              >
                {sort === "latest" ? "Latest" : "Oldest"}
                <IoIosArrowDown className="learn-icon" size={16} />
                {/* {dropdown ? (
                  <IoIosArrowDown className="learn-icon" size={16} />
                ) : (
                  <IoIosArrowDown className="learn-icon" size={16} />
                )} */}
              </h1>
              {dropdown && (
                <div className="absolute top-full left-[-48] mt-2 w-36 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/30 p-2 z-10 shadow-lg">
                  <ul className="flex flex-col gap-2">
                    <li
                      className={`px-2 py-2 cursor-pointer rounded-md ${
                        sort === "latest"
                          ? "bg-[#eab308]"
                          : "hover:bg-[#eab308]"
                      }`}
                      onClick={() => {
                        setSort("latest");
                        setdropdown(false);
                      }}
                    >
                      Latest
                    </li>
                    <li
                      className={`px-2 py-2 cursor-pointer rounded-md ${
                        sort === "oldest"
                          ? "bg-[#eab308]"
                          : "hover:bg-[#eab308]"
                      }`}
                      onClick={() => {
                        setSort("oldest");
                        setdropdown(false);
                      }}
                    >
                      Oldest
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {active !== "all" && (
          <div className="mb-6">
            <Popup
              category={active}
              setCategory={setActive}
              currentCategoryName={getProducts(active)}
            />
          </div>
        )}

        <div className="text-center mb-8">
          <h1 className="text-[#D2863C] text-lg font-medium">
            Showing{" "}
            <span className="text-[#EAB308] font-bold">
              {currentProducts.length}
            </span>{" "}
            of{" "}
            <span className="text-[#EAB308] font-bold">
              {displayProducts.length}
            </span>{" "}
            products
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 px-2 gap-6 mb-8">
          {categories.map((item) => (
            <button
              key={item}
              className={dataProduct(item)}
              onClick={() => setActive(item)}
            >
              {getProducts(item)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-2 ">
          {currentProducts.map((item) => (
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
        {active === "all" && totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10 ">
            {/* Previous button */}
            <button
              className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <RiArrowLeftSLine size={30} />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 ${
                  currentPage === i + 1
                    ? "bg-[#EAB308] text-black shadow-lg shadow-[#EAB308]/50 glow-effect"
                    : "bg-[#2D2D2D] text-white hover:bg-[#3D3D3D] shadow-md"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next button */}
            <button
              className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <RiArrowRightSLine size={30} />
            </button>
          </div>
        )}

        {/* <div className="flex justify-center items-center gap-3 ">
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
        </div> */}

        <div className="bg-black mt-20">
          <pre> </pre>
        </div>
      </section>
    </div>
  );
}
