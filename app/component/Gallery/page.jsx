import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
export default function page() {
  return (
    <div className="min-w-full max-h-[1600px] sm:max-h-[1400px] sm:py-8 md:py-1 lg:py-16 ">
      <section className="flex flex-col  justify-center items-center  sm:10 md:12 lg:px-14">
        <div className="flex flex-col justify-center items-center text-5xl font-bold mb-6 ">
          <h1 className="text-[#BE6B22] text-5xl font-bold mb-8">Gallery</h1>
          <p className="text-center text-[#EAB308] font-semibold text-2xl leading-relaxed lg:max-w-5xl md: mx-auto px-4 ">
            Discover how we grow, process, and share our tobacco through short
            videos that highlight our story, people, and passion.
          </p>
        </div>
        <div className=" w-full flex items-center justify-between my-4 px-2 sm:px-4">
          <h1 className="text- text-[#EBCB66] text-xl font-bold">
            Photo Gallery
          </h1>
          <Link
            href="/gallery/photo"
            className="flex items-center gap-1  text-[#EBCB66] font-semibold hover:text-yellow-300"
          >
            View All
            <MdArrowRightAlt size={20} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/photogallary/first.png"
            alt="logo"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <img
            src="/photogallary/second.png"
            alt="logo"
            className="w-full h-64 object-cover rounded-2xl px-2"
          />
          <img
            src="/photogallary/third.png"
            alt="logo"
            className="w-full h-64 object-cover rounded-2xl px-2"
          />
        </div>
        <div className=" w-full flex items-center justify-between my-4 px-4 lg:px-2">
          <h1 className="text- text-[#EBCB66] text-xl font-bold">
            Video Gallery
          </h1>
          <Link
            href="/gallery/vedio"
            className="flex items-center gap-1  text-[#EBCB66] font-semibold hover:text-yellow-300"
          >
            View All
            <MdArrowRightAlt size={20} />
          </Link>
        </div>
     <div className=" w-full flex items-center justify-start  px-4 lg:px-2 mb-2  ">
  <video className="  w-90 h-64  object-cover rounded-lg " controls>
    <source src="/vediogallery/video.mp4" type="video/mp4" />

  </video>
</div>


      </section>
    </div>
  );
}
