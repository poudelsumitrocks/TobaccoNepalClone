
import "./about.css"
import { FiAward } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";
export default function Page() {
  return (
    <div className=" about-container">
      <section className="about-section">
        {/* Background Image */}
        <div
          className="about-background"
          style={{ backgroundImage: "url('./aboutimg/backgroundimg.png')" }}
        >
        </div>
           <div className="about-overlay"></div>
        <div className="about-content">
            <div className="about-cont ">
          <h1 className="about-title">Our Story</h1>
          <p className="about-para">Crafting premium tobacco experiences for over a century, rooted in tradition and excellence.</p>
            </div>
        
        </div>
      </section>

      <section className=" py-20 bg-black text-white">
        <div className=" max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row"> 
          <div className="space-y-8 px-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EAB308]  text-center">Uccha Himal Product</h1>
            <p className="text-[18px] leading-relaxed text-justify">Welcome to <b><u>Uchha Himal Product Pvt Ltd</u></b>, a trusted name in Nepal’s tobacco industry. Founded with a vision to blend tradition and innovation, we craft premium tobacco products that reflect excellence and authenticity.</p>
          <p className="text-[18px] leading-relaxed text-justify">Guided by integrity and a commitment to quality, we source the finest tobacco leaves and use advanced manufacturing processes to deliver products that meet the highest standards.</p>
          <p className="text-[18px] leading-relaxed text-justify">For us, tobacco craftsmanship is an art — one that connects culture, heritage, and innovation. As we grow, we remain committed to sustainability, employee well-being, and community responsibility.</p>
       
        </div>

        <div className="relative md:w-1/2">
        <div className="rounded-2xl p-1">

          <img src="./aboutimg/himalproduct.png"  className="w-full h-auto object-cover rounded-lg" />
        </div>
        </div>
        </div>

        <div className="w-full px-6 py-10 text-lg md:text-xl">
          <p className="text-white leading-relaxed font-bold text-center">Uchha Himal Product Pvt Ltd — where quality meets craftsmanship, and tradition embraces innovation.</p></div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-6 ">Our Core Principles</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* div 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-[#D2863C] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#EAB308]/30 transition-all duration-300">
                <FiAward className="lucide lucide-award w-10 h-10 text-white"/>
                </div>
               
              </div>
               <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-[#EAB308]  group-hover:text-[#F59E0B] transition-colors">Quality Assurance</h1>
                  <p className="text-gray-300 leading-relaxed">We ensure top quality in every tobacco product, earning customer trust and satisfaction.</p>
                </div>
            </div>
            {/* div 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-[#D2863C] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#EAB308]/30 transition-all duration-300">
                <LuLightbulb className="lucide lucide-award w-10 h-10 text-white"/>
                </div>
               
              </div>
               <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-[#EAB308]  group-hover:text-[#F59E0B] transition-colors">Innovation and Technology</h1>
                  <p className="text-gray-300 leading-relaxed">We use advanced manufacturing technologies to improve quality and efficiency.</p>
                </div>
            </div>
            {/* div 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-[#D2863C] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#EAB308]/30 transition-all duration-300">
                <LuLeaf className="lucide lucide-award w-10 h-10 text-white"/>
                </div>
               
              </div>
               <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-[#EAB308]  group-hover:text-[#F59E0B] transition-colors">Sustainable Development</h1>
                  <p className="text-gray-300 leading-relaxed">We promote responsible growth by reducing environmental impact and building a greener future.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
