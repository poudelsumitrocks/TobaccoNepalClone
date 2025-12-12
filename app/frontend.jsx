// import Link from "next/link";
// import { MdArrowRightAlt } from "react-icons/md";
// export default function page() {
//   return (
//     <div className=" min-w-full max-h-[1600px]  py-16 ">
//       <section className="flex flex-col  justify-center items-center  px-14">
//         <h1 className=" text-[#EAB308] text-5xl  font-bold font-stretch-200% mb-6 ">
//           Our Featured product
//         </h1>
//         <p className="text-[#D2863C] text-lg font-semibold leading-7  mb-8">
//           Experience rich, smooth tobacco made using time-honored methods and
//           sustainable practices.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-2">
//           <div className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out">
//             <div className="h-2/3 flex items-center rounded-tl-2xl rounded-tr-2xl bg-[#111111] justify-center overflow-hidden">
//               <img
//                 src="./featureproductimg/parag.png"
//                 alt="Product Image"
//                 height={250}
//                 width={350}
//                 className=" mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "
//               />
//             </div>
//             <div className=" text-center h-1/3 flex flex-col item-center  ">
//               <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15] pt-4">
//                 S S Parag Gutka
//               </h1>
//               <p className=" text-[#D2863C]  line-clamp-2 text-center tracking-wide font-medium text-sm truecate overflow-hidden ">
//                 S.S. Parag Gutkha stands out for its fine blend of sun-cured
//                 tobacco, betel nut, and hand-selected flavoring agents. It
//                 offers a smooth yet robust taste with a balanced aroma that
//                 leaves a lasting impression. The product’s uniform texture and
//                 high-grade ingredients make it one of Uchha Himal’s most popular
//                 tobacco blends.{" "}
//               </p>
//             </div>
//           </div>

//           <div className="h-96 w-full bg-[#1A1A1A]  border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out">
//             <div className="h-2/3 flex items-center bg-[#111111] rounded-tl-2xl rounded-tr-2xl justify-center overflow-hidden">
//               <img
//                 src="./featureproductimg/shikar.png"
//                 alt="Product Image"
//                 height={250}
//                 width={350}
//                 className=" mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "
//               />
//             </div>
//             <div className=" text-center h-1/3 flex flex-col item-center  ">
//               <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15]">
//                 Product Name
//               </h1>
//               <p className=" text-[#D2863C]  font-medium text-sm   ">
//                 Product Description
//               </p>
//             </div>
//           </div>

//           <div className="h-96 w-full bg-[#1A1A1A] rounded-tl-2xl rounded-tr-2xl border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out">
//             <div className="h-2/3 bg-[#111111] rounded-tl-2xl rounded-tr-2xl flex items-center justify-center overflow-hidden">
//               <img
//                 src="./featureproductimg/afzal.png"
//                 alt="Product Image"
//                 height={230}
//                 width={350}
//                 className=" mt-1 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "
//               />
//             </div>
//             <div className=" text-center  h-1/3 flex flex-col item-center  ">
//               <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15]">
//                 Product Name
//               </h1>
//               <p className=" text-[#D2863C]  font-medium text-sm   ">
//                 Product Description
//               </p>
//             </div>
//           </div>

//           <div className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out">
//             <div className="h-2/3 bg-[#111111] rounded-tl-2xl rounded-tr-2xl flex items-center justify-center overflow-hidden">
//               <img
//                 src="./featureproductimg/sirgold.png"
//                 alt="Product Image"
//                 height={250}
//                 width={350}
//                 className=" mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "
//               />
//             </div>
//             <div className=" text-center h-1/3 flex flex-col item-center  ">
//               <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15]">
//                 Product Name
//               </h1>
//               <p className=" text-[#D2863C]  font-medium text-sm   ">
//                 Product Description
//               </p>
//             </div>
//           </div>

//           <div className="h-96 w-full bg-[#1A1A1A] border flex flex-col max-w-sm mx-auto justify-between rounded-2xl hover:border-[#eab308]/30 hover:shadow-2xl transition-all duration-400 ease-out">
//             <div className="h-2/3 bg-[#111111] rounded-tl-2xl rounded-tr-2xl flex items-center justify-center overflow-hidden">
//               <img
//                 src="./featureproductimg/hans.png"
//                 alt="Product Image"
//                 height={250}
//                 width={350}
//                 className=" mt-2 w-full h-full object-contain  transition-transform duration-500 ease-out group-hover:scale-105 "
//               />
//             </div>
//             <div className=" text-center h-1/3 flex flex-col item-center  ">
//               <h1 className="text-[#EAB308] font-bold text-lg transition-colors duration-300 group-hover:text-[#FACC15]">
//                 Product Name
//               </h1>
//               <p className=" text-[#D2863C]  font-medium text-sm line-clamp-2 text-center  tracking-wide  ">
//                 Product Description
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full flex justify-end my-4 mr-4 ">
//           <button className="text-[#EAB308] gap-1 flex  items-center justify-center hover:cursor-pointer hover:text-yellow-300 font-semibold">
//             View All
//             <MdArrowRightAlt size={20} />

//           </button>
//         </div>
//         <div className="mt-8">
//           <button className="bg-[#EAB308] px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-amber-300  font-bold text-shadow-2xs  ">
//             <Link href="/product">View products </Link></button>
//         </div>
//       </section>
//     </div>
//   );
// }
