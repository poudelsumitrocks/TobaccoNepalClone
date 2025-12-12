import Link from "next/link";

export default function page() {
  return (
    <div className="w-full bg-[#1F1F1F] shadow-md py-16">
      <section className="max-w-[1600px] mx-auto px-4 text-center">
        <h1 className=" text-[#FBBF8A] text-5xl mb-8 font-bold">Get in Touch</h1>
        <p className=" text-center  text-[#f98c2c] font-semibold  text-xl w-[700px] leading-relaxed max-w-6xl mx-auto px-4 mb-12">Discover the best assortment of high-quality tobacco products, carefully chosen for enthusiasts who appreciate authenticity, heritage, and workmanship.</p>
        <div className="flex justify-center items-center gap-6">
          <Link href={"/contact"} className=" bg-[#eab308]  hover:bg-[#FFD230] text-black px-6 py-2 font-bold text-xl rounded-lg"> Contact Us</Link>
          <Link href={"/about"} className=" bg-black px-6 py-2 border-2 border-[#eab308] text-[#eab308] font-semibold text-md rounded-lg ">Learn More</Link>
        </div>
      </section>
    </div>
  )
}
