import Link from "next/link";
export default function page() {
  return (
    <div className="w-full bg-black shadow-md py-16 lg:pl-10">
      <section className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-[#F8985F] text-5xl font-bold mb-8 ">
            <h1 className="text-[#F8985F] text-5xl font-bold mb-8">
              Our story
            </h1>
            <p className="text-[#61511c] text-xl font-semibold text-justify mb-8 ">
              Founded in 1985, Tobacco has been cultivating and processing
              premium tobacco in the pristine foothills of the Himalayas for
              over three decades. Our journey began with a simple mission: to
              produce the finest quality tobacco products while preserving
              traditional farming methods.
            </p>
            <div className="w-96 h-10">

              <button className="bg-[#EAB308] text-black font-semibold text-lg px-6 py-3 rounded-md shadow-lg hover:bg-yellow-600 transition-colors">
                <Link href="/about" className="text-black">Learn Our Story </Link>
              </button>
            </div>
           
          
          </div>
          <div className="relative w-full max-w-[618px] h-[400px]">
         
                <img src="/featureproductimg/ourstory.png" alt="logo" className="object-cover rounded-2xl shadow-[0px_4px_25px_1px_rgba(98,52,17,0.75)]"/>
           
          </div>
        </div>
      </section>
    </div>
  );
}
