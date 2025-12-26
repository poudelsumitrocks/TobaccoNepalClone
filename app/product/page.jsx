"use client";

import { useEffect, useState,useRef } from "react";
import "./product.css";
import "./style.css";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import useSWR from "swr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getProducts } from "./data";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import Search from "./search";
import Popup from "./Popup";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const topRef=useRef(null);
  const itemsPerPage = 10;
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://productsbackend-0zfz.onrender.com/products", fetcher);
  const categories = ["all", "gutkha", "surti", "jarda", "pan-masala"];

  const [displayProducts, setDisplayProducts] = useState([]);

  // Filter, sort, and search products
  useEffect(() => {
    if (!products) return;

    let filtered = products;

    // Category filter
    if (active !== "all") {
      filtered = filtered.filter((p) => p.category === active);
    }

    // Search by name
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
   const sorted = [...filtered].sort((a, b) => {
  if (sort === "latest") {
    return a.id - b.id;
  }
  if (sort === "oldest") {
    return b.id -a.id; 
  }
  return 0;
});


    setDisplayProducts(sorted);
    setCurrentPage(1);
    // router.push("/product", { scroll: false });
  }, [products, active, search, sort]);

  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = displayProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

  const goToPage = (page) => {
  if (page === currentPage) return; 

  setCurrentPage(page);

  const params = new URLSearchParams(searchParams.toString());
  params.set("page", page);

  router.push(`/product?${params.toString()}`, { scroll: false });

  requestAnimationFrame(() => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};


  function dataProduct(path) {
    return `flex items-center justify-center h-20 w-56 px-2 py-2 rounded-lg text-sm lg:text-lg font-semibold transition-all duration-300 cursor-pointer ${
      active === path
        ? "bg-[#FFF7E6] text-[#EAB308] shadow-lg -translate-y-1"
        : "bg-white text-gray-700 hover:-translate-y-1 hover:shadow-lg hover:bg-[#FFF7E6] hover:text-[#EAB308]"
    }`;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-container ">
      <section className="product-section">
        <div
          className="product-background"
          style={{
            backgroundImage: "url('./featureproductimg/ourproduct.png')",
          }}
        ></div>
        <div className="product-overlay"></div>

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

      <section className="bg-black max-h-[1000px]lg:max-h-[1900px] pl-6 pr-6">
        <div ref={topRef}  className="search-container mb-8">
          <Search
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />
        </div>

        {(active !== "all" || search || sort !== "all") && (
          <div className="mb-6">
            <Popup
              /* CATEGORY */
              category={active}
              setCategory={(cat) => {
                setActive(cat);
                router.push(
                  `/product?search=${encodeURIComponent(
                    search
                  )}&category=${cat}&sort=${sort}`,
                  { scroll: false }
                );
              }}
              currentCategoryName={getProducts(active)}
              /* SEARCH */
              search={search}
              setSearch={(value) => {
                setSearch(value);
                router.push(
                  `/product?search=${encodeURIComponent(
                    value
                  )}&category=${active}&sort=${sort}`,
                  { scroll: false }
                );
              }}
              /* SORT */
              sort={sort}
              setSort={(value) => {
                setSort(value);
                router.push(
                  `/product?search=${encodeURIComponent(
                    search
                  )}&category=${active}&sort=${value}`,
                  { scroll: false }
                );
              }}
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

        <div className="hidden md:grid lg:grid-cols-5 md:grid-cols-3 px-2 gap-6 mb-8">
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

        {/* MOBILE CATEGORY */}
        <div className="md:hidden mb-6 px-2 relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full bg-[#2D2D2D] text-white  px-4 py-3 rounded-xl font-semibold flex justify-between items-center shadow-lg"
          >
            {getProducts(active)}
            <span className="text-xl transition-transform duration-300">
              {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>

          {showDropdown && (
            <div className="absolute z-50 w-full mt-2 bg-[#2D2D2D] text-[#EAB308]  rounded-xl shadow-xl overflow-hidden">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-[#FFF7E6] ${
                    active === item ? "bg-[#EAB308]/40" : "text-white "
                  }`}
                >
                  {getProducts(item)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-2  overflow-clip">
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

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10 ">
            <button
              className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed"
              onClick={() => goToPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              <RiArrowLeftSLine size={30} />
            </button>

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

            <button
              className="p-4 rounded-xl bg-linear-to-r from-[#2D2D2D] to-[#1A1A1A] text-white hover:from-[#3D3D3D] hover:to-[#2D2D2D] transition-all duration-300 shadow-lg transform hover:scale-105 opacity-50 cursor-not-allowed"
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <RiArrowRightSLine size={30} />
            </button>
          </div>
        )}
        <div className="bg-black mt-10">
          <pre> </pre>
        </div>
      </section>
    </div>
  );
}
