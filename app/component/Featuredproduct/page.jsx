"use client";
import Link from "next/link";
import useSWR from "swr";
import { HiArrowLongRight } from "react-icons/hi2";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Featuredproduct() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const specialIds = [12, 11, 10, 9, 7];

  const selectedProducts = products
    .filter((p) => specialIds.includes(p.id))
    .sort((a, b) => specialIds.indexOf(a.id) - specialIds.indexOf(b.id));

  return (
    <div className="min-w-full max-h-[1600px]  py-16">
      <section className="flex flex-col  justify-center items-center  px-14">
        <h1 className=" text-[#EAB308] text-5xl  font-bold font-stretch-200% mb-6 ">
          Our Featured product
        </h1>
        <p className="text-[#D2863C] text-lg font-semibold leading-7  mb-8">
          Experience rich, smooth tobacco made using time-honored methods and
          sustainable practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-2">
            {selectedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out "
              >
                <div className="h-2/3 flex items-center rounded-tl-2xl rounded-tr-2xl bg-[#111111] justify-center overflow-hidden">
                <img
                  src={item.images}
                  alt={item.name}
                  className="mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105"
                />
                </div>
                <div className=" text-center h-1/3 flex flex-col item-center">

                <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15] pt-4">{item.name}</h1>
                <p className=" text-[#D2863C]  line-clamp-2 text-center tracking-wide font-medium text-sm truecate overflow-hidden">
                  {item.description}
                </p>
                </div>
              </Link>
            ))}
        </div>
         <div className="flex justify-end items-center my-4 mr-4 w-full">
            <Link
              href={"/product"}
              className="text-[#EAB308] text-base font-semibold  hover:text-yellow-300 flex justify-center items-center gap-2 "
            >
              View All
              <span>
                <HiArrowLongRight />
              </span>
            </Link>
         </div>
         <div className="mt-8">

         <Link href={"/product"} className="bg-[#eab308] text-black cursor-pointer hover:bg-amber-300 sm:text-[18px] font-bold text-shadow-2xs ] px-4 py-2 sm:px-6 sm:py-2 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.3)] ">View Products</Link>
         </div>
      </section>
    </div>
  );
}
