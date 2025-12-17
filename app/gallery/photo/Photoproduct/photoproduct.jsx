"use client";
import { useState } from "react";
import useSWR from "swr";
import { getCategoryLabel } from "./util";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Photoproduct() {
  const [active, setActive] = useState("all");

  const { data: products, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    fetcher
  );
// const { data: exportData } = useSWR(
//   `${process.env.NEXT_PUBLIC_EXPORT_API_URL}`,
//   fetcher
// );
  const specialIds = [16, 6, 8];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;


  const datas = [
    "all",
    "gutkha",
    "surti",
    "jarda",
    "pan-masala",
    "export",
  ];

  function DataProduct(path) {
    return `px-4 py-2 rounded-md text-sm font-medium transition-all
      ${
        active === path
          ? "bg-yellow-500 text-black hover:bg-yellow-600"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`;
  }

  
  const filteredProducts =
    active === "all"
      ? products
      : products.filter((item) => item.category === active);

  const selectedProducts = (filteredProducts || [])
    .filter((p) => specialIds.includes(p.id))
    .sort((a, b) => specialIds.indexOf(a.id) - specialIds.indexOf(b.id));

  return (
    <div>
   
      {/* FILTER BUTTONS */}
      <section className="py-8  flex justify-center w-full bg-black ">
        <div className="flex gap-1 bg-gray-800 p-1 rounded-lg display-flex justify-between w-[1050px] ">
          {datas.map((term) => (
            <button
              key={term}
              className={DataProduct(term)}
              onClick={() => setActive(term)}
            >
              {getCategoryLabel(term)}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-8 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-10">
          {selectedProducts.length > 0 ? (
            selectedProducts.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative group h-64 bg-[#1A1A1A] rounded-2xl overflow-hidden border hover:border-yellow-500/40 transition-all"
              >
                {/* IMAGE */}
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <span
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent
                             flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity
                             text-white font-semibold"
                >
                  {item.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No products found for this category
            </p>
          )}
        </div>

        {active !== "All Product" &&  (
          <div className="text-center mt-8">
            {filteredProducts.length === 0 && (
              filteredProducts.map((item)=>(
               <div
                key={item.id}
                className="relative group h-64 bg-[#1A1A1A] rounded-2xl overflow-hidden border hover:border-yellow-500/40 transition-all"
              >
                {/* IMAGE */}
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <span
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent
                             flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity
                             text-white font-semibold"
                >
                  {item.name}
                </span>
              </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}
